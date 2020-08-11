import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import {Container} from "react-bootstrap";
import Link from "next/link";
import React from "react";

const siteName = 'Fuminote tools'
export const siteTitle = 'Fuminote tools'

export default function Layout({
  children,
  home,
  toolName,
  description
}: {
  children: React.ReactNode,
  home?: boolean,
  toolName?: string,
  description?: string,
}) {
  return (
    <Container className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Fuminote tools made with Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{toolName || siteTitle}</title>
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/robobo.png"
              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              alt={siteName}
            />
            <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
            <p className={utilStyles.description}>{description}</p>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/robobo.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={siteName}
                />
              </a>
            </Link>
            <h1 className={utilStyles.heading2Xl}>{toolName}</h1>
            <p className={utilStyles.description}>{description}</p>
          </>
        )}
      </header>

      <main className={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  )
}
