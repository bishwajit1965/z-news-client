import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../Contexts/AuthProvider";
import { IoLogIn } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email before login. "
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Card>
        <Card.Header>
          <h4>Please Login</h4>
        </Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Text className="text-danger">{error}</Form.Text>
          </Form.Group>
          <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              <IoLogIn />
              Login
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Z-NEWS CLIENT PORTAL LOG IN
        </Card.Footer>
      </Card>
    </>
  );
};

export default Login;
