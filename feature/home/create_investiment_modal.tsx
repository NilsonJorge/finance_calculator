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

import React, { useState } from "react";
import { View, Text } from "react-native";

type CreateInvestimentProps = {
  className?: string;
};

export default function CreateInvestiment({
  className,
}: CreateInvestimentProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <View className={className}>
      <Button action="positive" onPress={() => setShowModal(true)}>
        <View className="flex-row justify-center items-center w-4/5">
          <ButtonIcon as={AddIcon} />
        </View>
      </Button>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
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
              <InputField placeholder="Nome do investimento" />
            </Input>
          </ModalBody>
          <ModalFooter className="justify-between">
            <Button action="negative" onPress={() => setShowModal(false)}>
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button action="positive" onPress={() => setShowModal(true)}>
              <ButtonText>Criar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
}
