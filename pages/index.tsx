import React from "react";
import {CardDeck, Card} from "react-bootstrap";
import Layout from "../components/layout";


export default function Home() {
  return (
    <Layout home description="よく使うものを置いておくよ">

      <CardDeck>

        {/*<Card border="primary" >*/}
        <Card
          bg="warning"
          text="light"
        >
          <Card.Link href="/tools/urldecoder">
            <Card.Body>
              <Card.Title>URL decode</Card.Title>
              <Card.Text>
                URL をデコードするよ!
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

        <Card
          bg="success"
          text="light"
        >
          <Card.Link href="/tools/counter">
            <Card.Body>
              <Card.Title>Counter</Card.Title>
              <Card.Text>
                Count click times.
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

      </CardDeck><br />

      <CardDeck>

        <Card border="info">
          <Card.Link href="https://nextjs.org/docs">
            <Card.Body>
              <Card.Title>Documentation</Card.Title>
              <Card.Text>
                Find in-depth information about Next.js features and API.
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

        <Card border="info">
          <Card.Link href="https://github.com/vercel/next.js/tree/master/examples">
            <Card.Body>
              <Card.Title>Examples</Card.Title>
              <Card.Text>
                Discover and deploy boilerplate example Next.js projects.
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

        <Card border="info">
          <Card.Link href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Card.Body>
              <Card.Title>Deploy</Card.Title>
              <Card.Text>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

      </CardDeck>

    </Layout>

  )
}


