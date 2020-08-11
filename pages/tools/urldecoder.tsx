import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "../../styles/utils.module.css";
import {Card, InputGroup, FormControl, Button} from "react-bootstrap";

const toolName = 'URL decode'


export default function URLDecode() {
  const [url, setUrl] = useState('');
  const [decodedUrl, setDecodedUrl] = useState('The decoded URL is displayed here');

  return (
    <Layout toolName={toolName} description="URL をデコードするよ">

      <Card border="secondary">

        <Card.Body>

          <InputGroup>
            <FormControl
              placeholder="Enter the URL you want to decode"
              aria-label="url"
              aria-describedby="basic-addon2"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
            <InputGroup.Append>
              <Button
                variant="primary"
                onClick={() => setDecodedUrl(decodeURI(url))}
              >
                Decode
              </Button>
              <Button
                variant="secondary"
                onClick={() => setUrl('')}
              >
                Reset
              </Button>
            </InputGroup.Append>
          </InputGroup>

        </Card.Body>

      </Card>

      <br/>
      <Card
        bg="light"
        text="dark"
      >
        <Card.Header>Decoded URL</Card.Header>
        <Card.Body>
          <p className={styles.code}>
            {decodedUrl}
          </p>
        </Card.Body>
      </Card>

    </Layout>
  )
}
