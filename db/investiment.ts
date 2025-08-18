import { db } from "@/db/db";

export type Investment = {
  id: number;
  name: string;
  total_value: number;
};

// Criar
export async function addInvestment(name: string, totalValue: number) {
  await db.runAsync(
    `INSERT INTO investment (name, total_value) VALUES (?, ?)`,
    [name, totalValue]
  );
}

// Ler todos
export async function getAllInvestments(): Promise<Investment[]> {
  const result = await db.getAllAsync(`SELECT * FROM investment`);
  return result as Investment[];
}

// Ler um pelo ID
export async function getInvestmentById(
  id: number
): Promise<Investment | null> {
  const result = await db.getFirstAsync(
    `SELECT * FROM investment WHERE id = ?`,
    [id]
  );
  return result ? (result as Investment) : null;
}

// Atualizar
export async function updateInvestment(
  id: number,
  name: string,
  totalValue: number
) {
  await db.runAsync(
    `UPDATE investment SET name = ?, total_value = ? WHERE id = ?`,
    [name, totalValue, id]
  );
}

// Deletar
export async function deleteInvestment(id: number) {
  await db.runAsync(`DELETE FROM investment WHERE id = ?`, [id]);
}
