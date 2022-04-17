import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'
import ListPost from '../components/ListPost'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JassBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <ListPost/>
    </div>
  )
}
