import React from "react";

function Intro() {
  return (
    <div className="CarouselContainer">
      <h2 className="CarouselTitle">ABOUT ME</h2>
      <div className="Rectangle"></div>
      <h3 className="CarouselHeader">
        Tufts '25, BS in Computer Science and Astrophysics
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "60px",
        }}
      >
        <p className="IntroParagraph1">
          Hi! My name is Won, and I am a sophomore pursuing a Bachelor of
          Science in Computer Science and Astrophysics at Tufts University. I
          was born in Korea but lived in Japan my entire life, recently moving
          to the United States to attend college. I was introduced to
          programming in high school and have fallen in love with it ever since,
          pushing myself forward through various projects, and my journey is
          continuing throughout my life at Tufts.
        </p>
        <p className="IntroParagraph2">
          I have a strong foundation in programming in the languages of C++,
          Python, and Java, as well as HTML, CSS, and JavaScript, through my
          experiences undergoing projects throughout the summer and school year.
          By engaging in multiple virtual internship programs while
          simultaneously working on a project to connect students and English
          tutors by allowing them to schedule sessions with one another, I am
          continuing to expand my knowledge of programming in the hopes of
          pursuing a career in computer science.
        </p>
      </div>
    </div>
  );
}

export default Intro;
