import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import React, { useState } from 'react';


export default function URLDecode() {
  const [url, setUrl] = useState('');
  const [decodedUrl, setDecodedUrl] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>URL decode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>URL decode</h1>

        <div className={styles.grid}>

          <div className={styles.card}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>

          <div className={styles.card}>
            <p>Enter the URL you want to decode</p>
            <input type="text" name="url" value={url} onChange={(event) => setUrl(event.target.value)} />
            <button onClick={() => setDecodedUrl(decodeURI(url))}>
              Decode URL
            </button>
            <button type="reset" onClick={() => setUrl('')}>
              Reset
            </button>
          </div>
          <div className={styles.card}>
            <p>
              Decoded URL: {decodedUrl}
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}
