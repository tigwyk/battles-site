import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getCardData  } from '../lib/cards'
import { useContext } from 'react';
import styles from '../styles/Home.module.css'
import Page from '../components/layout/Page.tsx'
import Card from '../components/Card'
import { useWeb3React } from "@web3-react/core";
import Account from "../components/Account";
import useEagerConnect from "../hooks/useEagerConnect";
import { ThemeContext } from 'styled-components';

export async function getStaticProps() {
  var cardIds = Array.from({length: 6}, (_, i) => i + 1)
  var cardArray = Array(6);
  cardIds.forEach((x) => cardArray[x-1] = getCardData(x))
  const cardData = cardArray;
  return {
    props: {
      cardData
    }
  }
}

export default function Home({ cardData }) {

  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const theme = useContext(ThemeContext);
  const isConnected = typeof account === "string" && !!library;

  return (
    <Page>
      <Head>
        <title>Card Battles</title>
        <meta name="description" content="Battle to be the best!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Battles!
        </h1>
        <p className={styles.description}>
          Battle your hero to level up and become the most powerful!
        </p><br/>
        <Account triedToEagerConnect={triedToEagerConnect} />
        <div className={styles.grid}>
            {cardData.map((card) => (
              <a href={"/cards/"+card.id} key={card.id}>
            <Card 
            name={card.name}
            race={card.race}
            class={card.class}
            health={card.health}
            armor={card.armor}
            mana={card.mana}
            strength={card.strength}
            agility={card.agility}
            intelligence={card.intelligence}
            damage={card.damage}
            crit={card.crit}
            magic={card.magic}
            avatar={card.avatar}
            lvl={card.lvl}
            attrib={card.attrib}
            exp={card.exp}
            />
            </a>
            ))}
            
          <a
            href="#"
            className={styles.card}
          >
            <h2>Learn More &rarr;</h2>
            <p>Discover more about your favourite heroes...</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Get Started &rarr;</h2>
            <p>
              Instantly get your first hero!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.google.com/search?q=kittens"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/kitten.png" alt="Kitten" width={32} height={32} />
          </span>
        </a>
      </footer>
    </Page>
  )
}
