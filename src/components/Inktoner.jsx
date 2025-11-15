import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopSection = () => {
  const [products, setProducts] = useState([]);
  const [grid, setGrid] = useState(false);
  const [active, setActive] = useState(false);

  // Sidebar toggle
  const sidebarController = () => {
    setActive(!active);
  };

  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter only Home Printer category products
        const homePrinters = data.filter(
          (item) =>
            item.category === "home-printer" ||
            item.categories?.includes("home-printer")
        );
        setProducts(homePrinters);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="shop py-80">
      <div className="container container-lg mb-40">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Shop By Category</h5>
            </div>
          </div>
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div className="row">
              <div className="col-sm-3">
                {" "}
                <div className="product-card h-100 d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  <Link
                    to="/home-printers"
                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/popular-img1.png"
                      alt=""
                      className="w-auto max-w-unset"
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
                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/popular-img1.png"
                      alt=""
                      className="w-auto max-w-unset"
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
                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/popular-img1.png"
                      alt=""
                      className="w-auto max-w-unset"
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
                    className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                    tabIndex={0}
                  >
                    <img
                      src="assets/images/thumbs/popular-img1.png"
                      alt=""
                      className="w-auto max-w-unset"
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
        </div>
      </div>

      {/* here */}

      <div className="container container-lg">
        <div className="row">
          {/* Content Start */}
          <div className="col-lg-12">
            {/* Top Start */}
            <div className="flex-between gap-16 flex-wrap mb-40">
              <span className="text-gray-900">
                Showing 1–{products.length} of {products.length} results
              </span>
            </div>
            {/* Top End */}

            <div className={`list-grid-wrapper ${grid && "list-view"}`}>
              <div className="row gy-4">
                {products.map((item, index) => {
                  const total = Math.floor(Math.random() * 50) + 10; // random 10–60
                  const sold = Math.floor(Math.random() * total);
                  const percent = Math.round((sold / total) * 100);
                  const rating = (Math.random() * 1 + 4).toFixed(1); // random 4.0–5.0
                  const reviews = Math.floor(Math.random() * 9000) + 1000; // random 1k–10k

                  return (
                    <div className="col-xl-2 col-lg-4 col-md-6" key={item.id}>
                      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                        <Link
                          to={`/product/${item.id}`}
                          className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                        >
                          <img
                            src={
                              item.imageUrl ||
                              "/assets/images/thumbs/product-two-img1.png"
                            }
                            alt={item.name}
                            className="w-auto"
                            style={{ width: "200px", borderRadius: "0.5rem" }}
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
              </div>
            </div>
          </div>
          {/* Content End */}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
