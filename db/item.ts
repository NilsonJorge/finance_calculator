import { db } from "@/db";

// Criar
export async function addItem(
  name: string,
  initialValue: number,
  initialDate: string,
  finalDate: string,
  differenceDates: number,
  percentage: number,
  period: string,
  finalValue: number
) {
  await db.runAsync(
    `INSERT INTO item 
      (name, initial_value, initial_date, final_date, difference_dates, percentage, period, final_value) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      initialValue,
      initialDate,
      finalDate,
      differenceDates,
      percentage,
      period,
      finalValue,
    ]
  );
}

// Ler todos
export async function getAllItems() {
  return await db.getAllAsync(`SELECT * FROM item`);
}

// Ler um pelo ID
export async function getItemById(id: number) {
  return await db.getFirstAsync(`SELECT * FROM item WHERE id = ?`, [id]);
}

// Atualizar
export async function updateItem(
  id: number,
  name: string,
  initialValue: number,
  initialDate: string,
  finalDate: string,
  differenceDates: number,
  percentage: number,
  period: string,
  finalValue: number
) {
  await db.runAsync(
    `UPDATE item 
     SET name = ?, initial_value = ?, initial_date = ?, final_date = ?, 
         difference_dates = ?, percentage = ?, period = ?, final_value = ? 
     WHERE id = ?`,
    [
      name,
      initialValue,
      initialDate,
      finalDate,
      differenceDates,
      percentage,
      period,
      finalValue,
      id,
    ]
  );
}

// Deletar
export async function deleteItem(id: number) {
  await db.runAsync(`DELETE FROM item WHERE id = ?`, [id]);
}
