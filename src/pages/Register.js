import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [ID, setID] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const handleIDChange = (event) => {
    setID(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto aligh-self-center w-50">
        <Form className="border bg-light rounded-3 p-5">
          <Form.Label className="text-center w-100 h2">Sign Up</Form.Label>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email(This will be your username)"
              value={ID}
              onChange={handleIDChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your First Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Last Name"
                  value={surname}
                  onChange={handleSurnameChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="m-auto w-75">
            <Col>
              <Button className="login-btn w-100" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Register;
