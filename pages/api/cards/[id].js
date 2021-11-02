// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllCardIds, getCardData } from '../../../lib/cards'

export default async (req, res) => {
  const { id } = req.query
  const card = await getCardData(id)
  res.status(200).json(card)
}
