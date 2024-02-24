import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ loginFunction }) => {
  const [ID, setID] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleIDChange = (event) => {
    setID(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const navigateRegister = () => {
    console.log("test register");
    navigate("/register");
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
        <Form className="border bg-light rounded-3 p-5" onSubmit={handleSubmit}>
          <Form.Label className="text-center w-100 h2">Login</Form.Label>
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
          <Row className="m-auto w-75">
            <Col>
              <Button className="login-btn w-100" type="submit">
                Login
              </Button>
            </Col>
            <Col>
              <Button className="login-btn w-100 " onClick={navigateRegister}>
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};
export default LoginPage;
