import React, {ChangeEvent, useState} from "react";
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
const description = 'URL をデコードするよ'

export default function URLDecode() {
  const [url, setUrl] = useState('');
  const [decodedUrl, setDecodedUrl] = useState('The decoded URL will be displayed here.');

  const handleChangeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value)
  };
  const handleClickDecode = (): void => {
    setDecodedUrl(decodeURI(url))
  };
  const handleClickReset = (): void => {
    setUrl('')
  };

  return (
    <Layout toolTitle={toolTitle} description={description}>

      <InputGroup>
        <FormControl
          placeholder="Enter the URL you want to decode"
          aria-label="url"
          aria-describedby="basic-addon2"
          value={url}
          onChange={handleChangeUrl}
        />
        <InputGroup.Append>
          <Button
            variant="primary"
            onClick={handleClickDecode}
          >
            Decode
          </Button>
          <Button
            variant="secondary"
            onClick={handleClickReset}
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
