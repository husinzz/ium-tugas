import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a href="#">
          <img
            style={{ marginRight: "0.75em" }}
            src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-3.png"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#targetModal-item">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="modal-item modal fade"
          id="targetModal-item"
          tabindex="-1"
          role="dialog"
          aria-labelledby="targetModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div
              class="modal-content border-0"
              style={{ backgroundColor: "#141432;" }}>
              <div
                class="modal-header border-0"
                style={{ padding: "2rem", paddingBottom: "0" }}>
                <a class="modal-title" id="targetModalLabel">
                  <img
                    style={{ marginTop: "0.5rem" }}
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-3.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  class="close btn-close text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div
                class="modal-body"
                style={{
                  padding: "2rem",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}>
                <ul class="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <li class="nav-item active">
                    <a class="nav-link" href="#" style={{ color: "#E7E7E8" }}>
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Feature
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="modal-footer border-0 gap-3"
                style={{ padding: "2rem", paddingTop: "0.75rem" }}>
                <button class="btn btn-default btn-no-fill">Log In</button>
                <button class="btn btn-fill border-0 text-white">
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{ color: "#E7E7E8" }}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Feature
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div class="gap-3">
            <button class="btn btn-default btn-no-fill">Log In</button>
            <button class="btn btn-fill text-white border-0">Try Now</button>
          </div>
        </div>
      </nav>
    </>
  );
}
