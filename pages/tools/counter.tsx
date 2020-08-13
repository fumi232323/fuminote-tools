import React, { useState } from "react";
import Layout from "../../components/layout";
import {Card, CardDeck, Button} from "react-bootstrap";

const toolTitle = 'Counter'
const description = 'Click 回数をカウントするよ'

export default function Counter() {
  const [successCount, setSuccessCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [dangerCount, setDangerCount] = useState(0);

  return (
    <Layout toolTitle={toolTitle} description={description}>

      <CardDeck>

        <Card border="success">
          <Card.Body>
            <Card.Title>You clicked {successCount} times</Card.Title>
            <Button variant="success" onClick={() => setSuccessCount(successCount + 1)}>
              Click me
            </Button>
          </Card.Body>
        </Card>

        <Card border="warning">
          <Card.Body>
            <Card.Title>You clicked {warningCount} times</Card.Title>
            <Button variant="warning" onClick={() => setWarningCount(warningCount + 1)}>
              Click me
            </Button>
          </Card.Body>
        </Card>

        <Card border="danger">
          <Card.Body>
            <Card.Title>You clicked {dangerCount} times</Card.Title>
            <Button variant="danger" onClick={() => setDangerCount(dangerCount + 1)}>
              Click me
            </Button>
          </Card.Body>
        </Card>

      </CardDeck>

    </Layout>
  )
}
