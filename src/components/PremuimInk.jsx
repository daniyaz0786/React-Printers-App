import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const total = Math.floor(Math.random() * 50) + 10; // random 10–60
const sold = Math.floor(Math.random() * total); // random 0–total
const percent = Math.round((sold / total) * 100);

const PromotionalTwo = () => {
  const [products, setProducts] = useState([]);

  // fetch Ink, Toner & Paper Supplies products
  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase().includes("ink-toner-paper")
        );
        setProducts(filtered);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <section className="offer sec-blue">
      <div className="container container-lg">
        <div style={{ padding: "80px" }}>
          <h4 className="text-center text-white">
            Premium Ink Cartridges & Supplies
          </h4>
          <p className="text-center text-white" style={{ fontSize: "16px" }}>
            Your printer deserves the best. At WEBSITE NAME, we offer
            high-quality ink, smooth-feeding paper, and trusted supplies that
            keep your printer running flawlessly. Enjoy consistent performance,
            clear prints, and long-lasting reliability while protecting your
            machine and warranty.
          </p>

          <div className="row gy-4 mt-40 mb-30">
            <div className="col-xxl-4 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 boxblue transition-2">
                <span className="w-56 h-56 flex-center rounded-circle sec-blue text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-lightning" />
                </span>
                <div className="">
                  <h6 className="mb-0">Authentic Quality</h6>
                  <span className="text-sm text-heading">
                    Original cartridges ensure premium printing.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 boxblue transition-2">
                <span className="w-56 h-56 flex-center rounded-circle sec-blue text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-currency-circle-dollar" />
                </span>
                <div className="">
                  <h6 className="mb-0">High Yield Options</h6>
                  <span className="text-sm text-heading">
                    XL cartridges last longer, saving money.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="shipping-item flex-align gap-16 rounded-16 boxblue transition-2">
                <span className="w-56 h-56 flex-center rounded-circle sec-blue text-white text-32 flex-shrink-0">
                  <i className="ph-fill ph-truck" />
                </span>
                <div className="">
                  <h6 className="mb-0">Fast Delivery</h6>
                  <span className="text-sm text-heading">
                    Swift shipping keeps your supplies stocked.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4" style={{ marginTop: "50px" }}>
            {products.map((item) => {
              const total = Math.floor(Math.random() * 50) + 10;
              const sold = Math.floor(Math.random() * total);
              const percent = Math.round((sold / total) * 100);
              const rating = (Math.random() * 1 + 4).toFixed(1);
              const reviews = Math.floor(Math.random() * 9000) + 1000;

              return (
                <div className="col-sm-3" key={item.id}>
                  <div className="product-card sec-white h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="product-card__thumb flex-center rounded-8 position-relative"
                    >
                      <img
                        src={
                          item.imageUrl ||
                          "assets/images/thumbs/product-two-img1.png"
                        }
                        alt={item.name}
                        className="w-auto"
                        style={{ maxWidth: "220px" }}
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
                          ({reviews.toLocaleString()})
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
                          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalTwo;
