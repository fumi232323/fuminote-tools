import React from "react";
import Head from "next/head";
import Link from "next/link";
import {Container} from "react-bootstrap";
import styled from 'styled-components';

const PageContainer = styled(Container)`
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Robo = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(360deg)
  }
`;
const PageTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;
const Description = styled.p`
  line-height: 1.5;
  font-size: 1.2rem;
  margin: 0 0 2rem;
`;
const BackToHome = styled.div`
  margin: 3rem 0 0;

  &:hover
  &:focus
  &:active {
    color: #0070f3;
    text-decoration: underline;
  }
`;
const siteTitle = 'Fuminote tools'

export default function Layout({
  children,
  home,
  toolTitle,
  description
}: {
  children: React.ReactNode,
  home?: boolean,
  toolTitle?: string,
  description?: string,
}) {
  return (
    <PageContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Fuminote tools made with Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{toolTitle || siteTitle}</title>
      </Head>

      <Header>
        {home ? (
          <>
            <Robo
              src="/images/robobobo.png"
              alt={siteTitle}
            />
            <PageTitle>{siteTitle}</PageTitle>
            <Description>{description}</Description>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Robo
                  src="/images/robobobo.png"
                  alt={siteTitle}
                />
              </a>
            </Link>
            <PageTitle>{toolTitle}</PageTitle>
            <Description>{description}</Description>
          </>
        )}
      </Header>

      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </PageContainer>
  )
}
