import React, { useState } from "react";
import Layout  from "../../components/layout";
import {Button, Form, Col} from "react-bootstrap";

const toolTitle = 'Uppercase Lowercase'
const description = '大文字小文字変換するよ'

export default function URLDecode() {
  const [srcLetters, setSrcLetters] = useState('');
  const [destLetters, setDestLetters] = useState('');
  const swap = () => {
    setSrcLetters(destLetters);
    setDestLetters(srcLetters);
    return;
  }

  return (
    <Layout toolTitle={toolTitle} description={description}>

      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              as="textarea"
              rows={ 7 }
              placeholder="Enter letters that you want to convert."
              value={srcLetters}
              onChange={(event) => setSrcLetters(event.target.value)}
            />
          </Col>

          <Col xs="auto">
            <Col style={{ margin: '0 0 10px' }}>
              <Button
                variant="warning"
                size="lg"
                onClick={() => setDestLetters(srcLetters.toUpperCase())}
              >
                Upper
              </Button>
            </Col>
            <Col style={{ margin: '0 0 10px' }}>
              <Button
                variant="success"
                size="lg"
                onClick={() => setDestLetters(srcLetters.toLowerCase())}
              >
                Lower
              </Button>
            </Col>
            <Col style={{ margin: '0 0 10px' }}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => swap()}
              >
                Swap&nbsp;
              </Button>
            </Col>
          </Col>

          <Col>
            <Form.Control
              as="textarea"
              rows={ 7 }
              placeholder="The converted letters will be displayed here."
              value={destLetters}
              readOnly
            />
          </Col>

        </Form.Row>
      </Form>

    </Layout>
  )
}
