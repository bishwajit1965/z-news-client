import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mb-4">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="shadow-lg"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">Z-NEWS HOME</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="p-0">
              <>
                <Link to="/profile">
                  <Image
                    src={user?.photoURL}
                    roundedCircle
                    style={{ height: "30px", marginRight: "5px" }}
                  />
                </Link>
                {user?.uid ? (
                  <>
                    <span className="p-0 me-4">{user?.displayName} </span>
                    <Link
                      onClick={handleLogOut}
                      className=" text-decoration-none"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="me-4 text-decoration-none">
                      Login
                    </Link>
                    <Link to="/register" className="text-decoration-none">
                      Register
                    </Link>
                  </>
                )}
              </>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
