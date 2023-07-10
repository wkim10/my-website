import React from "react";
import Intro from "./Intro";
import Education from "./Education";
import HobbiesInterests from "./HobbiesInterests";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CustomCarousel() {
  return (
    <Carousel showArrows={true}>
      <Intro />
      <Education />
      <HobbiesInterests />
    </Carousel>

    // <div
    //   id="carousel"
    //   class="carousel slide"
    //   data-ride="carousel"
    //   // data-bs-interval="false"
    // >
    //   <ol class="carousel-indicators">
    //     <li data-target="#carousel" data-slide-to="0" class="active"></li>
    //     <li data-target="#carousel" data-slide-to="1"></li>
    //     <li data-target="#carousel" data-slide-to="2"></li>
    //   </ol>
    //   <div class="carousel-inner">
    //     {/* Make this back to active */}
    //     <div class="carousel-item">
    //       <Intro />
    //     </div>
    //     <div class="carousel-item">
    //       <Education />
    //     </div>
    //     <div class="carousel-item active">
    //       <HobbiesInterests />
    //     </div>
    //   </div>
    //   <a
    //     class="carousel-control-prev"
    //     href="#carousel"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Previous</span>
    //   </a>
    //   <a
    //     class="carousel-control-next"
    //     href="#carousel"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Next</span>
    //   </a>
    // </div>
  );
}

export default CustomCarousel;
