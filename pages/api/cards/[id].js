// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllCardIds, getCardData } from '../../../lib/cards'
const cardJSON = require("../../../lib/card-data.json");

export default async (req, res) => {
  const { id } = req.query
  const card = await getCardData(id, cardJSON)
  res.status(200).json(card)
}
