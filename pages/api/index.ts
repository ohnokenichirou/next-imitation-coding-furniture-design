import { NextApiRequest, NextApiResponse } from "next";
import { ITEMS } from "@/constants/items";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = "1", limit = "10" } = req.query;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  const start = (pageNumber - 1) * limitNumber;
  const end = start + limitNumber;
  const paginatedItems = ITEMS.slice(start, end);

  const totalPages = Math.ceil(ITEMS.length / limitNumber);

  res.status(200).json({ items: paginatedItems, totalPages: totalPages });
}
