import z from "zod";

export const addInvestimentSchema = z.object({
  name: z.string().trim().nonempty({ message: "Obrigatório" }),
  totalValue: z.number(),
});

export type addInvestimentInput = z.infer<typeof addInvestimentSchema>;

export const addItemSchema = z.object({
  name: z.string().trim().nonempty({ message: "Obrigatório" }),
  initialValue: z.number(),
  initialDate: z.string().trim().nonempty({ message: "Obrigatório" }),
  finalDate: z.string().trim().nonempty({ message: "Obrigatório" }),
  differenceDates: z.number(),
  percentage: z.number(),
  period: z.string().trim().nonempty({ message: "Obrigatório" }),
  finalValue: z.number(),
});

export type addItemInput = z.infer<typeof addItemSchema>;
