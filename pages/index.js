import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
          <Card 
            name="Billy"
            race="feline"
            class="fighter"
            health="200"
            armor="100"
            mana="0"
            strength="100"
            agility="100"
            intelligence="100"
            damage="100"
            crit="100"
            magic="100"
            avatar="1"
            />
          <Card 
            name="Freddy"
            race="feline"
            class="cleric"
            health="200"
            armor="100"
            mana="0"
            strength="100"
            agility="100"
            intelligence="100"
            damage="100"
            crit="100"
            magic="100"
            avatar="1"
            />
            <Card 
            name="Mary"
            race="feline"
            class="mage"
            health="100"
            armor="50"
            mana="100"
            strength="50"
            agility="50"
            intelligence="200"
            damage="100"
            crit="100"
            magic="200"
            avatar="1"
            />
            <Card 
            name="Zeal"
            race="feline"
            class="paladin"
            health="100"
            armor="50"
            mana="100"
            strength="50"
            agility="50"
            intelligence="200"
            damage="100"
            crit="100"
            magic="200"
            avatar="1"
            />
            <Card 
            name="Klepto"
            race="feline"
            class="thief"
            health="100"
            armor="50"
            mana="100"
            strength="50"
            agility="50"
            intelligence="200"
            damage="100"
            crit="100"
            magic="200"
            avatar="1"
            />
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
