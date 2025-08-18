import { db } from "./db";

export async function initDB() {
  await db.execAsync(`PRAGMA foreign_keys = ON`);
  // await db.execAsync(`
  //   DROP TABLE IF EXISTS item;
  //   DROP TABLE IF EXISTS investment;
  // `);
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS investment (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      total_value REAL
    )
  `);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS item (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      investment_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      initial_value REAL,
      initial_date TEXT,
      final_date TEXT,
      difference_dates REAL,
      percentage REAL,
      period TEXT,
      final_value REAL,
      FOREIGN KEY (investment_id) REFERENCES investment(id) ON DELETE CASCADE
    )
  `);
}
