import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const NewArrivalTwo = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRelatedProducts(shuffled.slice(0, 10));
      })
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="new-arrival pb-80">
      <div className="container container-lg">
        <div className="section-heading">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0">You Might Also Like</h5>
            <div className="flex-align gap-16">
              <Link
                to="/shop"
                className="btn btn-outline-white d-inline-flex align-items-center gap-8"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
        <div className="new-arrival__slider arrow-style-two">
          <Slider {...settings}>
            {relatedProducts.map((item) => {
              const rating = (Math.random() * 1 + 4).toFixed(1);
              const reviews = Math.floor(Math.random() * 24000 + 1000);
              const total = 100;
              const sold = Math.floor(Math.random() * total);
              const percent = (sold / total) * 100;

              return (
                <div key={item.id}>
                  <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="product-card__thumb flex-center rounded-8 position-relative"
                    >
                      <img
                        src={
                          item.imageUrl ||
                          "/assets/images/thumbs/product-two-img1.png"
                        }
                        alt={item.name}
                        className="w-auto"
                        style={{ maxWidth: "220px", borderRadius: "0.5rem" }}
                      />
                    </Link>

                    <div className="product-card__content mt-16">
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-medium text-gray-500">
                          {rating}
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-xs fw-medium text-gray-500">
                          ({reviews.toLocaleString()} reviews)
                        </span>
                      </div>

                      <h6 className="title text-lg fw-semibold mt-12 mb-8">
                        <Link
                          to={`/product/${item.id}`}
                          className="link text-line-2"
                        >
                          {item.name}
                        </Link>
                      </h6>

                      <div className="flex-align gap-4">
                        <span className="text-tertiary-600 text-md d-flex">
                          <i className="ph-fill ph-storefront" />
                        </span>
                        <span className="text-gray-500 text-xs">
                          By WEBSITE NAME
                        </span>
                      </div>

                      <div className="mt-8">
                        <div
                          className="progress w-100 bg-color-three rounded-pill h-4"
                          role="progressbar"
                          aria-valuenow={percent}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-tertiary-600 rounded-pill"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className="text-gray-900 text-xs fw-medium mt-8">
                          Sold: {sold}/{total}
                        </span>
                      </div>

                      <div className="product-card__price my-20">
                        {item.oldPrice && (
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through me-2">
                            ${item.oldPrice}
                          </span>
                        )}
                        <span className="text-heading text-md fw-semibold">
                          ${item.price}{" "}
                          <span className="text-gray-500 fw-normal">/Qty</span>
                        </span>
                      </div>

                      <Link
                        to="/cart"
                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                      >
                        Add To Cart <i className="ph ph-shopping-cart" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalTwo;
