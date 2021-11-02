import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const cardsDirectory = path.join(process.cwd(), 'cards')

export function getSortedCardsData() {
  // Get file names under /cards
  const fileNames = fs.readdirSync(cardsDirectory)
  const allCardsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(cardsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the card metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort cards by id
  return allCardsData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllCardIds() {
    const fileNames = fs.readdirSync(cardsDirectory)
  
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
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export function getCardData(id) {

    //const tokenData = fetch(tokenURI);

    const fullPath = path.join(cardsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the card metadata section
    const matterResult = matter(fileContents)
    //const matterResult = JSON.parse(tokenData);
  
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  }