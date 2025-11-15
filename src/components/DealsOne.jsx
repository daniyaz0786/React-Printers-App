import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";
import toast from "react-hot-toast";

const DealsOne = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) =>
            item.category &&
            (item.category.toLowerCase().includes("laser") ||
              item.category.toLowerCase().includes("inkjet"))
        );
        setProducts(filtered);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const [timeLeft, setTimeLeft] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // ✅ Add to Cart Handler
  const handleAddToCart = (product) => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      toast.error("Please login first!");
      navigate("/login");
      return;
    }

    // Retrieve existing cart or create new one
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1; // increase quantity
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Save back to session
    sessionStorage.setItem("cart", JSON.stringify(cart));

    // ✅ Show success message
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section className="deals-weeek pt-80 sec-grey">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Shop By Category</h5>
              <div className="flex-align gap-16">
                <Link
                  to="/shop"
                  className="btn btn-outline-white d-inline-flex align-items-center gap-8"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div className="row">
              <div className="col-sm-3">
                {" "}
                <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <Link
                    to="/home-printers"
                    className="product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/home-printer.jpg"
                      alt=""
                      className="w-auto max-w-unset rounded-8"
                    />
                  </Link>
                  <div className="product-card__content flex-grow-1">
                    <h6 className="title text-lg fw-semibold mb-12">
                      <Link
                        to="/home-printers"
                        className="link text-line-2"
                        tabIndex={0}
                      >
                        Home Printers
                      </Link>
                    </h6>

                    <Link
                      to="/home-printers"
                      className="text-tertiary-600 flex-align gap-8 mt-24"
                    >
                      Shop Now
                      <i className="ph ph-arrow-right d-flex" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                {" "}
                <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <Link
                    to="/office-printers"
                    className="product-card__thumb flex-center h-unset rounded-8   position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/office-printer.jpg"
                      alt=""
                      className="w-auto max-w-unset rounded-8"
                    />
                  </Link>
                  <div className="product-card__content flex-grow-1">
                    <h6 className="title text-lg fw-semibold mb-12">
                      <Link
                        to="/office-printers"
                        className="link text-line-2"
                        tabIndex={0}
                      >
                        Office Printers
                      </Link>
                    </h6>

                    <Link
                      to="/office-printers"
                      className="text-tertiary-600 flex-align gap-8 mt-24"
                    >
                      Shop Now
                      <i className="ph ph-arrow-right d-flex" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                {" "}
                <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <Link
                    to="/inkjet-printers"
                    className="product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/inkjet-printer.jpg"
                      alt=""
                      className="w-auto max-w-unset rounded-8"
                    />
                  </Link>
                  <div className="product-card__content flex-grow-1">
                    <h6 className="title text-lg fw-semibold mb-12">
                      <Link
                        to="/inkjet-printers"
                        className="link text-line-2"
                        tabIndex={0}
                      >
                        Inkjet Printers
                      </Link>
                    </h6>

                    <Link
                      to="/inkjet-printers"
                      className="text-tertiary-600 flex-align gap-8 mt-24"
                    >
                      Shop Now
                      <i className="ph ph-arrow-right d-flex" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                {" "}
                <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <Link
                    to="/laser-printers"
                    className="product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/laser-printer.jpg"
                      alt=""
                      className="w-auto max-w-unset rounded-8"
                    />
                  </Link>
                  <div className="product-card__content flex-grow-1">
                    <h6 className="title text-lg fw-semibold mb-12">
                      <Link
                        to="/laser-printers"
                        className="link text-line-2"
                        tabIndex={0}
                      >
                        Laser Printers
                      </Link>
                    </h6>

                    <Link
                      to="/laser-printers"
                      className="text-tertiary-600 flex-align gap-8 mt-24"
                    >
                      Shop Now
                      <i className="ph ph-arrow-right d-flex" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-week-slider arrow-style-two">
            <div className="mt-30 py-10 mb-30 text-center">
              <h4>Best Laser Printers & Ink Cartridge Deals</h4>
              <p>
                Shop top printers for home and small offices with genuine ink
                cartridges and complete office supply solutions from WEBSITE
                NAME today.
              </p>
            </div>

            <Slider {...settings}>
              {products.map((item) => {
                const total = Math.floor(Math.random() * 50) + 10;
                const sold = Math.floor(Math.random() * total);
                const percent = Math.round((sold / total) * 100);
                const rating = (Math.random() * 1 + 4).toFixed(1);
                const reviews = Math.floor(Math.random() * 9000) + 1000;

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

                        {/* Progress Bar */}
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

                        {/* Price Section */}
                        <div className="product-card__price my-20">
                          {item.oldPrice && (
                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through me-2">
                              ${item.oldPrice}
                            </span>
                          )}
                          <span className="text-heading text-md fw-semibold">
                            ${item.price}{" "}
                            <span className="text-gray-500 fw-normal">
                              /Qty
                            </span>
                          </span>
                        </div>

                        {/* Add to Cart */}
                        <button
                          onClick={() => handleAddToCart(item)}
                          type="button"
                          className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                          style={{ width: "100%" }}
                        >
                          Add To Cart <i className="ph ph-shopping-cart" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOne;
