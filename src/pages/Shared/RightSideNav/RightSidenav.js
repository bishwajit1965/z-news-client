import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AuthContext } from "../../../Contexts/AuthProvider";


import {
  IoLogoGoogle,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSidenav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <ButtonGroup vertical className="w-100">
        <Button
          className="mb-2"
          variant="outline-primary"
          onClick={handleGoogleSignIn}
        >
          <IoLogoGoogle /> Login with Google
        </Button>{" "}
        <Button className="mb-2" variant="outline-secondary">
          <IoLogoGithub /> Login with Github
        </Button>{" "}
      </ButtonGroup>
      <div className="mt-4">
        <h6>Find us on</h6>
        <ListGroup>
          <ListGroup.Item className="mb-2 bg-light">
            <IoLogoFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light">
            <IoLogoTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light">
            <IoLogoInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light">
            <IoLogoWhatsapp /> Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="brand-carousel">
        <BrandCarousel />
      </div>
    </>
  );
};

export default RightSidenav;
