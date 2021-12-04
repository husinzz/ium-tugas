import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";

// markup
const IndexPage = () => {
  return (
    <>
      <section
        class="h-100 w-100"
        style={{ boxSizing: "border-box", backgroundColor: "#141432" }}>
        <div
          class="container-xxl mx-auto p-0  position-relative header-2-3"
          style={{ fontFamily: "'Poppins', sans-serif;" }}>
          <Navbar />
          <div>
            <Carousel />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
