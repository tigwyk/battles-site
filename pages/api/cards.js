// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllCardIds, getCardData } from '../../lib/cards'

export default async (req, res) => {
  const cards = await getAllCardIds();
  let cardArray = [];
  for(let i=0;i<cards.length;i++) {
    console.log(cards[i])
    cardArray.push(await getCardData(cards[i].params.id))
  }
  res.status(200).json(cardArray)
}
