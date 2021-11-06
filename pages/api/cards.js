// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllCardIds, getCardData, getSortedCardsData } from '../../lib/cards'
const cardJSON = require("../../lib/card-data.json");

export default async (req, res) => {
  const cards = await getSortedCardsData(cardJSON);
  /*
  let cardArray = [];
  for(let i=0;i<cards.length;i++) {
    console.log(cards[i])
    cardArray.push(await getCardData(cards[i].params.id))
  }
  */
  res.status(200).json(cards)
}
