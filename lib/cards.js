import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const cardsDirectory = path.join(process.cwd(), 'card-data')

export function getSortedCardsData(cardJSON) {
  // Get file names under /cards
  //const fileNames = fs.readdirSync(cardsDirectory)
  /*
  const allCardsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(cardsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the card metadata section
    const matterResult = matter(fileContents)
    //console.log(cardJSON);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  */
  let allCardsData = cardJSON;
  for(let i=0;i<cardJSON.length;i++){
    allCardsData[i].id = i+1;
  }
  // Sort cards by id
  return allCardsData.sort(({ id: a }, { id: b }) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllCardIds(cardJSON) {
    const fileNames = fs.readdirSync(cardsDirectory)
    
    let allCardsData = cardJSON;
    for(let i=0;i<cardJSON.length;i++){
      allCardsData[i].id = i+1;
    }
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return allCardsData.map(cardData => {
      console.log("cardData ID:",cardData.id);
      return {
        params: {
          id: (cardData.id).toString()
        }
      }
    })
  }

  export function getCardData(id, cardJSON) {

    //const tokenData = fetch(tokenURI);

    //const fullPath = path.join(cardsDirectory, `${id}.md`)
    //const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the card metadata section
    //const matterResult = matter(fileContents)
    console.log(id);
    const matterResult = cardJSON[id-1];
  
    // Combine the data with the id
    return {
      id,
      ...matterResult
    }
  }