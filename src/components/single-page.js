import { Link } from "gatsby";
import React from "react";

const list = [
  {
    title: "",
    content : {
      items : ["harimau joget", "tiara bau belum mandi", "Kuda bernang"]
    }
  },
  {
    title: "Kkudalari",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum ",
  },
  {
    title: "Kkudalari",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum ",
  },
  {
    title: "Kkudalari",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum ",
  },
  {
    title: "Kkudalari",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum ",
  },
];

export default function SinglePage() {
  return (
    <section
      class="w-100"
      style={{ boxSizing: "border-box", backgroundColor: "#141432" }}>
      <div
        class="content-3-3 container-xxl mx-auto position-relative"
        style={{ fontFamily: "'Poppins', sans-serif;" }}>
        <div class="d-flex flex-lg-row flex-column align-items-center">
          <div class="img-hero text-center justify-content-center d-flex">
            <img
              id="hero"
              class="img-fluid"
              src="https://placeholder.pics/svg/300"
              alt=""
            />
          </div>

          <div class="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
            <h2 class="title-text text-white">Infomasi Ngawi</h2>
            <ul class="p-0 m-0">
              {list.map((current, index) => {
                return (
                  <List
                    key={index}
                    number={index + 1}
                    paragraph={current.paragraph}
                    title={current.title}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary border-0"
        style={{ position: "fixed", bottom: "2em", right: "2em" }}>
        <Link className="p-5 text-white" style={{ zIndex: "1" }} to="/">
          Kembali ke beranda
        </Link>
      </button>
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
