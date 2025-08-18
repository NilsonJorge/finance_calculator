import { addItem, getAllInvestimentItems, Item } from "@/db/item";
import { addItemInput } from "@/db/schema";

import React, { createContext, useContext, useEffect, useState } from "react";

type ItemContextType = {
  items: Item[];
  loading: boolean;
  refreshItems: () => Promise<void>;
  createItem: (item: addItemInput) => Promise<void>;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshItems();
  }, []);

  const refreshItems = async () => {
    setLoading(true);
    const all = await getAllInvestimentItems(id);
    setItems(all);
    setLoading(false);
  };

  const createItem = async (item: addItemInput) => {
    await addItem(
      item.name,
      item.initialValue,
      item.initialDate,
      item.finalDate,
      item.differenceDates,
      item.percentage,
      item.period,
      item.finalValue
    );
    await refreshItems();
  };

  return (
    <ItemContext.Provider value={{ items, loading, refreshItems, createItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItems deve ser usado dentro do ItemProvider");
  }
  return context;
};
