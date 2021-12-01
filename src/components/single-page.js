import React from "react";
import Navbar from "./navbar";

export default function SinglePage() {
  return (
    <section
      class="w-100"
      style={{ boxSizing: "border-box", backgroundColor: "#141432" }}>
      <button
        style={{ position: "fixed", bottom: "1em", right: "2em" }}
        class="btn text-white">
        Kembali Ke beranda
      </button>
      <div
        class="content-3-3 container-xxl mx-auto position-relative"
        style={{ fontFamily: "'Poppins', sans-serif;" }}>
        <div class="d-flex flex-lg-row flex-column align-items-center">
          <div class="img-hero text-center justify-content-center d-flex">
            <img
              id="hero"
              class="img-fluid"
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-1.png"
              alt=""
            />
          </div>

          <div class="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
            <h2 class="title-text text-white">Infomasi Ngawi</h2>
            <ul class="p-0 m-0">
              <List />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function List(props) {
  return (
    <li class="list-unstyled" style={{ marginBottom: "2rem" }}>
      <h4 class="title-caption text-white d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
        <span class="circle text-white d-flex align-items-center justify-content-center">
          {props.number}
        </span>
        {props.title}
      </h4>
      <p class="text-caption">{props.paragraph}</p>
    </li>
  );
}
