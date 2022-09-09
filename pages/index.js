import Head from "next/head"
import Image from "next/image"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christophe Dev</title>
        <meta name='description' content='Web development portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}
