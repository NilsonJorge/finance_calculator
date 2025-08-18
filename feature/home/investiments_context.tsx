import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllInvestments, addInvestment, Investment } from "@/db/investiment";

type InvestmentContextType = {
  investments: Investment[];
  loading: boolean;
  refreshInvestments: () => Promise<void>;
  createInvestment: (name: string, totalValue: number) => Promise<void>;
};

const InvestmentContext = createContext<InvestmentContextType | undefined>(
  undefined
);

export const InvestmentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshInvestments();
  }, []);

  const refreshInvestments = async () => {
    setLoading(true);
    const all = await getAllInvestments();
    setInvestments(all);
    setLoading(false);
  };

  const createInvestment = async (name: string, totalValue: number) => {
    await addInvestment(name, totalValue);
    await refreshInvestments();
  };

  return (
    <InvestmentContext.Provider
      value={{ investments, loading, refreshInvestments, createInvestment }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};

export const useInvestments = () => {
  const context = useContext(InvestmentContext);
  if (!context) {
    throw new Error(
      "useInvestments deve ser usado dentro do InvestmentProvider"
    );
  }
  return context;
};
