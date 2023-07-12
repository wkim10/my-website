import React, { useRef } from "react";
import Nav from "react-bootstrap/Nav";
import profile from "../images/profile.jpeg";

function Header() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current[0]);
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "65.5%",
        }}
      >
        <img
          src={profile}
          alt="Profile"
          style={{
            alignSelf: "center",
            borderRadius: "200px",
            border: "9px solid #edeff5",
            // width: "19%",
            width: "272px",
          }}
        />
      </div>
      <header
        style={{
          paddingBottom: "137px",
          // paddingBottom: windowSize.current[0] * 0.095
        }}
      >
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" className="top">
            HOME
          </Nav.Link>
          <Nav.Link eventKey="link-1">ABOUT ME</Nav.Link>
          <Nav.Link eventKey="link-2">SKILLS</Nav.Link>
          <Nav.Link eventKey="link-3">LANGUAGES</Nav.Link>
          <Nav.Link eventKey="link-4">PROJECTS</Nav.Link>
          <Nav.Link eventKey="link-5">WORK EXPERIENCE</Nav.Link>
          <Nav.Link eventKey="link-6">EXTRACURRICULAR ACTIVITIES</Nav.Link>
        </Nav>

        <div className="title">Won Kim</div>
        <div className="subtitle">COMPUTER SCIENCE MAJOR</div>
      </header>
      <div
        style={{
          backgroundColor: "#edeff5",
          // height: windowSize.current[0] * 0.095,
          height: "137px",
        }}
      />
    </div>
  );
}

export default Header;
