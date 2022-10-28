import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { AuthContext } from "../../Contexts/AuthProvider";
import { IoPersonAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const [acceptTermsAndConditions, setAcceptTermsAndConditions] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address before you log in.");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserProfile(profile);
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAcceptedTermsAndConditions = (event) => {
    setAcceptTermsAndConditions(event.target.checked);
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <h4>Please Register</h4>{" "}
        </Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Text className="text-danger">{error}</Form.Text>
          </Form.Group>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="PhotoURL"
              />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAcceptedTermsAndConditions}
                label={
                  <>
                    Accept <Link to="/terms"> Terms and conditions</Link>
                  </>
                }
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!acceptTermsAndConditions}
            >
              <IoPersonAdd />
              Register
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Z-NEWS CLIENT PORTAL REGISTER
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Register;
