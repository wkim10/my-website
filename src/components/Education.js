import React from "react";
import tufts_logo from "../images/tufts_logo.png";

function Education() {
  return (
    <div className="CarouselContainer">
      <h2 className="CarouselTitle">EDUCATION</h2>
      <div className="Rectangle"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={tufts_logo}
          alt="Tufts University"
          style={{ width: "40%", height: "40%", marginRight: "50px" }}
        />
        <div style={{ width: "31%" }}>
          <div className="CarouselHeader">Tufts University</div>
          <div style={{ fontWeight: "600", color: "#94A3BA" }}>2021-2025</div>
          <div>B.S. Computer Science and Astrophysics</div>
          <div>
            <span style={{ fontWeight: "600" }}>GPA</span>: 3.93
          </div>
          <div>
            <span style={{ fontWeight: "600" }}>Honors/Awards</span>: Dean's
            List
          </div>
          <div style={{ fontWeight: "600" }}>Relevant Courses</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul>
              <li>Data Structures</li>
              <li>Discrete Math</li>
              <li>OOP for GUIs</li>
              <li>Algorithms</li>
            </ul>
            <ul>
              <li>Machine Structure</li>
              <li>Assembly Language</li>
              <li>Linear Algebra</li>
            </ul>
          </div>
        </div>
        {/* <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "10px" }}
        >
          <div>
            <div className="CarouselHeader">Tufts University</div>
            <div style={{ fontWeight: "600", color: "#94A3BA" }}>2021-2025</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "68%" }}>
                <div>
                  I am currently pursuing a B.S. in Computer Science and
                  Astrophysics at Tufts.
                </div>
              </div>
              <div>
                <div>
                  <span style={{ fontWeight: "600" }}>GPA</span>: 3.93
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>Awards</span>: Dean's List
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "74%" }}>
            <div className="CarouselHeader">Relevant Courses</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ul>
                <li>Data Structures</li>
                <li>Discrete Math</li>
                <li>OOP for GUIs</li>
              </ul>
              <ul>
                <li>Algorithms</li>
                <li>Machine Structure/Assembly Language</li>
                <li>Linear Algebra</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <div style={{ width: "40%" }}>
            <img
              src={asij_logo}
              alt="The American School in Japan"
              style={{ width: "90%" }}
            />
            <div style={{}}>
              <div>The American School in Japan</div>
              <div>2010-2021</div>
              <div>
                I went to high school at ASIJ in Tokyo, Japan, where I received
                my High School Diploma.
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Education;
