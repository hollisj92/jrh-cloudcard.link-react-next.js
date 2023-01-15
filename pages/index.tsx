import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React from 'react';
import MyCard from '../compontents/Card/card';


const inter = Inter({ subsets: ["latin"] });
// handleFliterClick

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MyCard />
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
        <div className={styles.cloud3}></div>
      </main>
      <footer>
        <p>www.jrh-cloudcard.com - 2023</p>
      </footer>
    </>
  );
}
