import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import "./Home.css";
import image1 from "../../public/images/code1.jpg";
import image2 from "../../public/images/code2.jpg";
import image3 from "../../public/images/code3.jpg";

export const Home = () => {
  return (
    <>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100 img-fluid"
                alt="image.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100 img-fluid"
                alt="image.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100 img-fluid"
                alt="image.jpg"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="text-center py-3">Welcome to N-Tech Global</h1>

        <section className="mt-3">
          <div>
            <div className="text-center">
              <div>
                <h2>What We Do</h2>
                <p>
                  At N-Tech Global's, we specialize in providing top-notch IT
                  services tailored to your needs. From custom software
                  development to IT consulting, we have you covered.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <div>
                <NavLink to="/admin/service">
                  <button className="btn btn-outline-dark">
                    Explore Our Services!
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
