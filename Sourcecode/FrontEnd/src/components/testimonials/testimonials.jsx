import React from "react";
import "./testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section pb-5" id="testimonials-section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div>
          <h1 className="featured-games-title">Testimonials</h1>
          <hr />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-50 pb-3"
              src={process.env.PUBLIC_URL + "/images/Abdelkareem.png"}
              alt="First slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt.
            </div>
            <span>Abdelkareem Al Deek</span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 pb-3"
              src={process.env.PUBLIC_URL + "/images/abdullah.png"}
              alt="Second slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt
            </div>
            <span>Abdallah  Marei </span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-50 pb-3"
              src={process.env.PUBLIC_URL + "/images/Ahmad.jpg"}
              alt="Third slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio fuga officia alias voluptatibus labore aliquam, maxime
              delectus, nemo incidunt
            </div>
            <span>Ahmad Al Dabouqi</span>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Testimonials;
