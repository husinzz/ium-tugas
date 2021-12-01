import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
            <div class="mx-auto d-flex flex-lg-row flex-column hero">
              <div class="left-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center text-center">
                <h1 class="title-text-big">
                  The best way
                  <br class=" d-lg-block d-none" /> to organize your online
                  learning
                </h1>
                <div class="d-flex flex-sm-row flex-column align-items-center mx-lg-0 mx-auto justify-content-center gap-3">
                  <button class="btn d-inline-flex mb-md-0 btn-try text-white border-0">
                    Galeri
                  </button>
                  <button class="btn btn-outline">
                    <div class="d-flex align-items-center">
                      <svg
                        class="me-2"
                        width="13"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.9293 8L6.66668 5.158V10.842L10.9293 8ZM12.9173 8.27734L5.85134 12.988C5.80115 13.0214 5.74283 13.0406 5.6826 13.0435C5.62238 13.0463 5.5625 13.0328 5.50934 13.0044C5.45619 12.9759 5.41175 12.9336 5.38075 12.8818C5.34976 12.8301 5.33337 12.771 5.33334 12.7107V3.28934C5.33337 3.22904 5.34976 3.16989 5.38075 3.11817C5.41175 3.06645 5.45619 3.0241 5.50934 2.99564C5.5625 2.96719 5.62238 2.95368 5.6826 2.95656C5.74283 2.95944 5.80115 2.9786 5.85134 3.012L12.9173 7.72267C12.963 7.75311 13.0004 7.79435 13.0263 7.84273C13.0522 7.89111 13.0658 7.94513 13.0658 8C13.0658 8.05488 13.0522 8.1089 13.0263 8.15728C13.0004 8.20566 12.963 8.2469 12.9173 8.27734Z"
                          fill="#707092"
                        />
                      </svg>
                      Video Ngawi
                    </div>
                  </button>
                </div>
              </div>
              <div class="right-column text-center d-flex justify-content-center pe-0">
                <img
                  id="img-fluid"
                  class="h-auto mw-100"
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
