import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

import { getSortedPostsData } from '../lib/cards'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
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
        </p>

        <div className={styles.grid}>
          <a href="/cards/1">
            <Card 
            name="Billy"
            race="human"
            class="fighter"
            health="200"
            armor="100"
            mana="0"
            strength="100"
            agility="100"
            intelligence="50"
            damage="100"
            crit="100"
            magic="100"
            avatar="1"
            lvl="10"
            />
            </a>
            <a href="/cards/2">
          <Card 
            name="Mary"
            race="human"
            class="cleric"
            health="200"
            armor="50"
            mana="100"
            strength="20"
            agility="20"
            intelligence="100"
            damage="100"
            crit="100"
            magic="100"
            avatar="1"
            lvl="100"
            attrib="intelligence"
            />
            </a>
            <a href="/cards/3">
            <Card 
            name="Tim"
            race="human"
            class="mage"
            health="200"
            armor="10"
            mana="100"
            strength="10"
            agility="10"
            intelligence="200"
            damage="100"
            crit="100"
            magic="200"
            avatar="1"
            lvl="7"
            attrib="intelligence"
            />
            </a>
            <a href="/cards/4">
            <Card 
            name="Zeal"
            race="human"
            class="paladin"
            health="200"
            armor="100"
            mana="100"
            strength="100"
            agility="50"
            intelligence="100"
            damage="100"
            crit="100"
            magic="200"
            avatar="1"
            lvl="42"
            attrib="strength"
            />
            </a>
            <a href="/cards/5">
            <Card 
            name="Klepto"
            race="human"
            class="thief"
            health="200"
            armor="50"
            mana="50"
            strength="50"
            agility="100"
            intelligence="50"
            damage="100"
            crit="200"
            magic="50"
            avatar="1"
            lvl="69"
            attrib="agility"
            />
            </a>
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
    </div>
  )
}
