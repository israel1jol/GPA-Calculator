import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jumbotron from '../Components/Jumbotron'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="Anthony Adigun" />
        <meta name="description" content="Cumulative Grade Point Average Calculator for high school, college students. Calculate your cgpa and understand how the cgpa scale works" />
      </Head>
      <Jumbotron />
    </>
  )
}
