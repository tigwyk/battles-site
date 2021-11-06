import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Card.module.css'
import { getAllCardIds, getCardData } from '../../lib/cards'
import Card from '../../components/Card'

const cardJSON = require("../../lib/card-data.json");

export async function getStaticProps({ params }) {
  const cardData = await getCardData(params.id, cardJSON)
  return {
    props: {
      cardData
    }
  }
}

export default function CardPage({ cardData }) {

    return (
        <div className={styles.container}>
        <Head>
          <title>Battles Card #{cardData.id}</title>
          <meta name="description" content="NFT Card Battles" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
              <main className={styles.main}>
              <h1 className={styles.title}>
                Card #{cardData.id} - {cardData.name} the {cardData.class}
              </h1>
      
              <p className={styles.description}>
              </p>
              <div className={styles.grid}>
              <Card 
            name={cardData.name}
            race={cardData.race}
            class={cardData.class}
            health={cardData.health}
            armor={cardData.armor}
            mana={cardData.mana}
            strength={cardData.strength}
            agility={cardData.agility}
            intelligence={cardData.intelligence}
            damage={cardData.damage}
            crit={cardData.crit}
            magic={cardData.magic}
            avatar={cardData.avatar}
            lvl={cardData.lvl}
            attrib={cardData.attrib}
            exp={cardData.exp}
            />
      </div>
      <Link href="/">
          <a>&larr; BACK TO HOME</a>
        </Link>
              </main>
              </div>
    )
  }

  export async function getStaticPaths() {
    const paths = getAllCardIds()
    return {
      paths,
      fallback: false
    }
  }