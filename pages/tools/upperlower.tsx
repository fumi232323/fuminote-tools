import React, {ChangeEvent, useState} from "react";
import Layout  from "../../components/layout";
import {Button, Form, Col} from "react-bootstrap";

const toolTitle = 'Uppercase Lowercase'
const description = '大文字小文字変換するよ made with React Bootstrap'

export default function UpperLowerConverter() {
  const [srcLetters, setSrcLetters] = useState('');
  const [destLetters, setDestLetters] = useState('');

  const handleChangeSrcLetters = (event: ChangeEvent<HTMLInputElement>): void => {
    setSrcLetters(event.target.value)
  };
  const handleClickUpper = (): void => {
    setDestLetters(srcLetters.toUpperCase())
  };
  const handleClickLower = (): void => {
    setDestLetters(srcLetters.toLowerCase())
  };
  const handleClickSwap = (): void => {
    setSrcLetters(destLetters);
    setDestLetters(srcLetters);
  };

  return (
    <Layout toolTitle={toolTitle} description={description}>

      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              as="textarea"
              rows={ 7 }
              aria-label="source letters"
              placeholder="Enter letters that you want to convert."
              value={srcLetters}
              onChange={handleChangeSrcLetters}
            />
          </Col>

          <Col xs="auto">
            <Col style={{ margin: '0 0 10px' }}>
              <Button
                variant="warning"
                size="lg"
                onClick={handleClickUpper}
              >
                Upper
              </Button>
            </Col>
            <Col style={{ margin: '0 0 10px' }}>
              <Button
                variant="success"
                size="lg"
                onClick={handleClickLower}
              >
                Lower
              </Button>
            </Col>
            <Col style={{ margin: '0 0 10px' }}>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleClickSwap}
              >
                Swap&nbsp;
              </Button>
            </Col>
          </Col>

          <Col>
            <Form.Control
              as="textarea"
              rows={ 7 }
              aria-label="destination letters"
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
