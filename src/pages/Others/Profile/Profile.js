import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURlRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURlRef.current.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <>
      <h4>User Profile</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            defaultValue={user?.email}
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            type="text"
            defaultValue={name}
            placeholder="Name..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL:</Form.Label>
          <Form.Control
            type="text"
            ref={photoURlRef}
            defaultValue={user?.photoURL}
            placeholder="PhotoURL..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Profile;
