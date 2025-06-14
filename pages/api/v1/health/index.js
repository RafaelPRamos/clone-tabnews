import db from "infra/database.js";

export default async function status(_, res) {
  try {
    const status = await db.getStatus();
    res.status(200).json({
      ...status,
    });
  } catch (error) {
    console.error("Error executing query", error.stack);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
}
