import { Button, Container, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
      <Row className="m-auto aligh-self-center w-50 h-50">
        <Form className="border bg-light rounded-3 p-5" onSubmit={handleSubmit}>
          <Form.Label className="text-center w-100 h2 p-3">Sign In</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
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
          {/* <Form.Group>
            <Form.Check // prettier-ignore
              type={"checkbox"}
              label="Remember me?"
            />
          </Form.Group> */}
          <Row className="m-auto w-75">
            <Button className="login-btn w-100" type="submit">
              Login
            </Button>
          </Row>
          <Row className="m-auto w-50"></Row>
          <Row className=" w-100 text-end">
            <Form>
              Need an account? <Link to="/register">Sign Up</Link>
            </Form>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};
export default LoginPage;
