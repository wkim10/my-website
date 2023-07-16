import React from "react";
import Grid from "@mui/material/Grid";
import javascript from "../images/javascript.png";
import typescript from "../images/typescript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import mongodb from "../images/mongodb.png";
import firebase from "../images/firebase.png";
import nodejs from "../images/nodejs.png";
import expressjs from "../images/expressjs.png";
import bootstrap from "../images/bootstrap.png";
import python from "../images/python.png";
import cplusplus from "../images/c++.png";
import java from "../images/java.png";
import korea from "../images/korea.jpeg";
import japan from "../images/japan.png";

function Skills() {
  return (
    <div className="Skills">
      <div
        style={{ fontSize: "38px", fontWeight: "bold", letterSpacing: "0.1em" }}
      >
        SKILLS
      </div>
      <div className="Rectangle" style={{ backgroundColor: "white" }} />
      <Grid container>
        <Grid item xs={3} className="SkillContainer">
          <img src={javascript} alt="JavaScript" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={typescript} alt="TypeScript" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={html} alt="HTML" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={css} alt="CSS" style={{ width: "80%" }} />
        </Grid>

        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>JavaScript</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>TypeScript</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>HTML</div>
        </Grid>
        <Grid
          item
          xs={3}
          className="SkillContainer"
          style={{ marginBottom: "30px" }}
        >
          <div style={{ fontSize: 30 }}>CSS</div>
        </Grid>

        <Grid item xs={3} className="SkillContainer">
          <img src={react} alt="React" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={react} alt="React" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={mongodb} alt="MongoDB" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={firebase} alt="Firebase" style={{ width: "80%" }} />
        </Grid>

        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>React</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>React Native</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>MongoDB</div>
        </Grid>
        <Grid
          item
          xs={3}
          className="SkillContainer"
          style={{ marginBottom: "30px" }}
        >
          <div style={{ fontSize: 30 }}>Firebase</div>
        </Grid>

        <Grid item xs={3} className="SkillContainer">
          <img src={nodejs} alt="Node.js" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={expressjs} alt="Express.js" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={bootstrap} alt="Bootstrap" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={python} alt="Python" style={{ width: "80%" }} />
        </Grid>

        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>Node.js</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>Express.js</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>Bootstrap</div>
        </Grid>
        <Grid
          item
          xs={3}
          className="SkillContainer"
          style={{ marginBottom: "30px" }}
        >
          <div style={{ fontSize: 30 }}>Python</div>
        </Grid>

        <Grid item xs={3} className="SkillContainer" />
        <Grid item xs={3} className="SkillContainer">
          <img src={cplusplus} alt="C++" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <img src={java} alt="Java" style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={3} className="SkillContainer" />

        <Grid item xs={3} className="SkillContainer" />
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>C++</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer">
          <div style={{ fontSize: 30 }}>Java</div>
        </Grid>
        <Grid item xs={3} className="SkillContainer" />
      </Grid>

      <div
        style={{
          fontSize: "38px",
          fontWeight: "bold",
          letterSpacing: "0.1em",
          marginTop: "100px",
        }}
      >
        LANGUAGES
      </div>
      <div className="Rectangle" style={{ backgroundColor: "white" }} />
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={6} className="SkillContainer">
          <img src={korea} alt="Korea" style={{ width: "60%" }} />
        </Grid>
        <Grid item xs={6} className="SkillContainer">
          <img src={japan} alt="Japan" style={{ width: "60%" }} />
        </Grid>

        <Grid item xs={6} className="SkillContainer">
          <div style={{ fontSize: 30 }}>Korean</div>
        </Grid>
        <Grid item xs={6} className="SkillContainer">
          <div style={{ fontSize: 30 }}>Japanese</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
