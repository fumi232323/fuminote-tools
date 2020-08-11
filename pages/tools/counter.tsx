import React, { useState } from "react";
import Layout from "../../components/layout";
import {Card, CardDeck, Button} from "react-bootstrap";

const toolName = 'Counter'


export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Layout toolName={toolName} description="Click 回数をカウントするよ">

      <CardDeck>

        <Card border="secondary">
          <Card.Body>
            <Card.Title>You clicked {count} times</Card.Title>
            <Button variant="success" onClick={() => setCount(count + 1)}>
              Click me
            </Button>
          </Card.Body>
        </Card>

      </CardDeck>

    </Layout>
  )
}
