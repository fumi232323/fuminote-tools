import React from "react";
import Layout from "../components/layout";
import {CardDeck, Card} from "react-bootstrap";

export default function Home() {
  return (
    <Layout home description="よく使うものを置いておくよ">

      <CardDeck>

        <Card
          bg="light"
          text="light"
          border="info"
        >
          <Card.Link href="/tools/upper_lower">
            <Card.Body>
              <Card.Title><b>new! </b>Uppercase &lt;-&gt; Lowercase</Card.Title>
              <Card.Text>
                Convert uppercase to lowercase and lowercase to uppercase.
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

        <Card
          bg="light"
          text="light"
          border="info"
        >
          <Card.Link href="/tools/upperlower">
            <Card.Body>
              <Card.Title>Uppercase &lt;-&gt; Lowercase</Card.Title>
              <Card.Text>
                Convert uppercase to lowercase and lowercase to uppercase.
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>

      </CardDeck><br />

      <CardDeck>

        <Card
          bg="light"
          text="dark"
          border="info"
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
          bg="light"
          text="light"
          border="info"
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


