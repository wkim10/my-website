import React from "react";
import { Icon } from "@iconify/react";

function HobbiesInterests() {
  return (
    <div className="CarouselContainer">
      <h2 className="CarouselTitle">HOBBIES & INTERESTS</h2>
      <div className="Rectangle"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: "80px",
          paddingInline: "180px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            icon="emojione-monotone:movie-camera"
            height={100}
            style={{
              marginBottom: "10px",
              border: "1px solid black",
              borderRadius: "25px",
            }}
          />
          <div>Film</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            icon="mdi:telescope"
            height={100}
            style={{
              marginBottom: "10px",
              border: "1px solid black",
              borderRadius: "25px",
            }}
          />
          <div>Astronomy</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            icon="maki:swimming"
            height={100}
            style={{
              marginBottom: "10px",
              border: "1px solid black",
              borderRadius: "25px",
            }}
          />
          <div>Swimming</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            icon="material-symbols:downhill-skiing"
            height={100}
            style={{
              marginBottom: "10px",
              border: "1px solid black",
              borderRadius: "25px",
            }}
          />
          <div>Skiing</div>
        </div>
      </div>
    </div>
  );
}

export default HobbiesInterests;
