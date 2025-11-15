import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyViewedOne = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle and pick 10 random products
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 10));
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="recently-viewed pt-80">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Recently Viewed Products</h5>
              <div className="flex-align gap-16">
                <Link
                  to="/shop"
                  className="btn btn-outline-white d-inline-flex align-items-center gap-8"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
          <div className="row gy-4" style={{ marginTop: "50px" }}>
            {products.map((item) => {
              const rating = (Math.random() * 1 + 4).toFixed(1); // 4.0–5.0
              const reviews = Math.floor(Math.random() * 9000) + 1000; // 1k–10k
              const discount = Math.floor(Math.random() * 30) + 5; // 5–30% OFF

              return (
                <div
                  className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6"
                  key={item.id}
                >
                  <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="product-card__thumb flex-center rounded-8   position-relative"
                    >
                      <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                        Recent
                      </span>
                      <img
                        src={
                          item.imageUrl ||
                          "assets/images/thumbs/product-two-img6.png"
                        }
                        alt={item.name}
                        className="w-auto"
                      />
                    </Link>

                    <div className="product-card__content mt-16">
                      <span className="text-main-600 bg-main-50 text-sm fw-medium py-4 px-8">
                        {discount}% OFF
                      </span>

                      <h6 className="title text-lg fw-semibold my-16">
                        <Link
                          to={`/product/${item.id}`}
                          className="link text-line-2"
                        >
                          {item.name}
                        </Link>
                      </h6>

                      <div className="flex-align gap-6">
                        <div className="flex-align gap-8">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="text-15 fw-medium text-warning-600 d-flex"
                            >
                              <i className="ph-fill ph-star" />
                            </span>
                          ))}
                        </div>
                        <span className="text-xs fw-medium text-gray-500">
                          {rating}
                        </span>
                        <span className="text-xs fw-medium text-gray-500">
                          ({reviews.toLocaleString()})
                        </span>
                      </div>

                      <span className="py-2 px-8 text-xs rounded-pill text-main-two-600 bg-main-two-50 mt-16">
                        Fulfilled by WEBSITE NAME
                      </span>

                      <div className="product-card__price mt-16 mb-30">
                        {item.oldPrice && (
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                            ${item.oldPrice}
                          </span>
                        )}
                        <span className="text-heading text-md fw-semibold ">
                          ${item.price}{" "}
                          <span className="text-gray-500 fw-normal">/Qty</span>
                        </span>
                      </div>

                      {/* ✅ Add to Cart Button (replacing Delivered by) */}
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
    </section>
  );
};

export default RecentlyViewedOne;
