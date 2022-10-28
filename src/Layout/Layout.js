import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";
import RightSidenav from "../pages/Shared/RightSideNav/RightSidenav";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSidenav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
