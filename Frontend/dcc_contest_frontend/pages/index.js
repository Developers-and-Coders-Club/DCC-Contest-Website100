import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import HomePage from './HomePage/Home'



export default function Home() {
  return (
    <>
      <Head>
        <title>DCC - Dream Code Create!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="path/to/assets/content-styles.css" type="text/css"/>
        {/* <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script> */}
      </Head>
      <Navbar />
      <HomePage />
    </>
  )
}
