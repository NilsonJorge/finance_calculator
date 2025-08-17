import { db } from "@/db";

// Criar
export async function addInvestment(name: string, totalValue: number) {
  await db.runAsync(
    `INSERT INTO investment (name, total_value) VALUES (?, ?)`,
    [name, totalValue]
  );
}

// Ler todos
export async function getAllInvestments() {
  return await db.getAllAsync(`SELECT * FROM investment`);
}

// Ler um pelo ID
export async function getInvestmentById(id: number) {
  return await db.getFirstAsync(`SELECT * FROM investment WHERE id = ?`, [id]);
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
