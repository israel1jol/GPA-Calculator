import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbotron from '../Components/Jumbotron'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Jumbotron />
    </>
  )
}
