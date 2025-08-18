import { Button, ButtonIcon, ButtonText } from "@/components/ui/button/index";
import { AddIcon, CloseIcon, Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { addInvestment, getAllInvestments } from "@/db/investiment";

import { addInvestimentInput, addInvestimentSchema } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { View, Text } from "react-native";
import { useInvestments } from "./investiments_context";

type CreateInvestimentProps = {
  className?: string;
};

export default function CreateInvestiment({
  className,
}: CreateInvestimentProps) {
  const { createInvestment } = useInvestments();
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<addInvestimentInput>({
    resolver: zodResolver(addInvestimentSchema),
    defaultValues: {
      name: "",
      totalValue: 0,
    },
  });

  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  async function submit(data: addInvestimentInput) {
    createInvestment(data.name, data.totalValue);
    closeModal();
  }
  return (
    <View className={className}>
      <Button action="positive" onPress={() => setShowModal(true)}>
        <View className="flex-row justify-center items-center w-4/5">
          <ButtonIcon as={AddIcon} />
        </View>
      </Button>

      <Modal isOpen={showModal} onClose={closeModal}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text className="font-bold text-lg">Criar Investimento</Text>
            <ModalCloseButton>
              <Icon as={CloseIcon} size="md" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                onChangeText={(text) => setValue("name", text)}
                placeholder="Nome do investimento"
              />
            </Input>
          </ModalBody>
          <ModalFooter className="justify-between">
            <Button action="negative" onPress={closeModal}>
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button action="positive" onPress={handleSubmit(submit)}>
              <ButtonText>Criar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
}
