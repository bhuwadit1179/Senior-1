import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ loginFunction }) => {
  const auth = getAuth();
  const [ID, setID] = useState();
  const [password, setPassword] = useState();

  const handleIDChange = (event) => {
    setID(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginData = { username: ID, password: password };
      const response = await axios.post(
        "http://localhost:3001/login",
        loginData
      );
      console.log(response);
      loginFunction();
    } catch (error) {
      alert("Username and Password are not found");
    }
  };

  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto aligh-self-center w-50">
        <Form className="border p-5" onSubmit={handleSubmit}>
          <Form.Label className="text-center w-100">Login</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Username"
              value={ID}
              onChange={handleIDChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Row className="m-auto w-50">
            <Button className="login-btn" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};
export default LoginPage;
