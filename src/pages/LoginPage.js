import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = ({ loginFunction }) => {
  const handleSubmit = (event) => {
    loginFunction();
  };

  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto aligh-self-center w-50">
        <Form className="border p-5" onSubmit={handleSubmit}>
          <Form.Label className="text-center w-100">Login</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
