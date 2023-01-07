import React from "react";
import Nav from "react-bootstrap/Nav";

function Header() {
    return <header>
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link eventKey="link-1">ABOUT ME</Nav.Link>
            <Nav.Link eventKey="link-2">SKILLS</Nav.Link>
            <Nav.Link eventKey="link-3">LANGUAGES</Nav.Link>
            <Nav.Link eventKey="link-4">PROJECTS</Nav.Link>
            <Nav.Link eventKey="link-5">WORK EXPERIENCE</Nav.Link>
            <Nav.Link eventKey="link-6">EXTRACURRICULAR ACTIVITIES</Nav.Link>
        </Nav>

        <h1>Won Kim</h1>
        <h2>Computer Science Major</h2>
    </header>
}

export default Header;