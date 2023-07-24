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
          top: "57%",
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
          paddingTop: "30px",
          paddingBottom: "137px",
          // paddingBottom: windowSize.current[0] * 0.095
        }}
      >
        <div
          style={{
            fontSize: "20px",
            paddingInline: "30px",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            paddingBottom: "100px",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "#BBC8DD" }}>
            HOME
          </a>
          <a href="/work" style={{ textDecoration: "none", color: "#BBC8DD" }}>
            WORK
          </a>
          <a
            href="/projects"
            style={{ textDecoration: "none", color: "#BBC8DD" }}
          >
            PROJECTS
          </a>
          <a
            href="/activities"
            style={{ textDecoration: "none", color: "#BBC8DD" }}
          >
            ACTIVITIES
          </a>
        </div>

        {/* <Nav
          defaultActiveKey="/home"
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Nav.Link href="/home" className="top">
            HOME
          </Nav.Link>
          <Nav.Link eventKey="link-1">ABOUT ME</Nav.Link>
          <Nav.Link eventKey="link-2">SKILLS</Nav.Link>
          <Nav.Link eventKey="link-3">LANGUAGES</Nav.Link>
          <Nav.Link eventKey="link-4">PROJECTS</Nav.Link>
          <Nav.Link eventKey="link-5">WORK EXPERIENCE</Nav.Link>
          <Nav.Link eventKey="link-6">EXTRACURRICULAR ACTIVITIES</Nav.Link>
        </Nav> */}

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
