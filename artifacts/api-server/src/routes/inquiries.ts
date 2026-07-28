import { Router, type IRouter } from "express";
import { CreateInquiryBody, CreateInquiryResponse } from "@workspace/api-zod";
import { db, inquiriesTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/inquiries", async (req, res) => {
  const parsed = CreateInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Invalid input" });
    return;
  }

  try {
    const [row] = await db.insert(inquiriesTable).values(parsed.data).returning();
    if (!row) {
      res.status(500).json({ error: "Failed to save inquiry" });
      return;
    }
    const data = CreateInquiryResponse.parse({
      ...row,
      createdAt: row.createdAt.toISOString(),
    });
    res.status(201).json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to create inquiry");
    res.status(500).json({ error: "Failed to save inquiry" });
  }
});

export default router;
