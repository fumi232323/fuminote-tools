import React, { useState } from "react";
import Layout  from "../../components/layout";
import {Card, InputGroup, FormControl, Button} from "react-bootstrap";
import styled from 'styled-components';

const CodeBlock = styled.div`
  background: inherit;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`
const toolTitle = 'URL decode'

export default function URLDecode() {
  const [url, setUrl] = useState('');
  const [decodedUrl, setDecodedUrl] = useState('The decoded URL will be displayed here.');

  return (
    <Layout toolTitle={toolTitle} description="URL をデコードするよ">

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

      <br/>
      <Card
        bg="light"
        text="dark"
      >
        <Card.Header>Decoded URL</Card.Header>
        <Card.Body>
          <CodeBlock>
            {decodedUrl}
          </CodeBlock>
        </Card.Body>
      </Card>

    </Layout>
  )
}
