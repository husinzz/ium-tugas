import React from "react";

function CarouselItem(props) {
  return (
    <div class={"carousel-item " + props.active}>
      <img
        src={props.pic}
        class="d-block mx-auto"
        height="612px"
      />
      <div class="carousel-caption d-none d-md-block ">
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}


export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <CarouselItem title={`Monumen Soerjo`} desc={``} pic={`m.png`} active="active" />
          <CarouselItem title={`Air Terjun Pengantin`} desc={``} pic={`air.png`} />
          <CarouselItem title={`Waduk Pondok Ngawi`} desc={``} pic={`waduk.png`} />
          {/* <CarouselItem title={``} desc={``} pic={``} /> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
