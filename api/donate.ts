import { promises as fs } from "node:fs";
import { resolve } from "node:path";

const donationsDir = resolve(process.cwd(), "data");
const donationsFile = resolve(donationsDir, "donations.json");

async function ensureDonationsFile() {
  await fs.mkdir(donationsDir, { recursive: true });
  try {
    await fs.access(donationsFile);
  } catch {
    await fs.writeFile(donationsFile, "[]", "utf-8");
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, amount, phone, message } = req.body;

  if (!name || !email || amount === undefined || Number.isNaN(Number(amount))) {
    return res.status(400).json({ error: "Missing or invalid donation fields." });
  }

  const donation = {
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    amount: Number(amount),
    phone: phone ? String(phone).trim() : undefined,
    message: message ? String(message).trim() : undefined,
    receivedAt: new Date().toISOString(),
  };

  try {
    await ensureDonationsFile();
    const raw = await fs.readFile(donationsFile, "utf-8");
    const donations = raw ? JSON.parse(raw) : [];
    donations.push(donation);
    await fs.writeFile(donationsFile, JSON.stringify(donations, null, 2));
    console.log("[donation] New pledge received:", donation);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[donation] Failed to persist donation", error);
    return res.status(500).json({ error: "Unable to record donation. Please try again later." });
  }
}