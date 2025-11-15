import React from "react";
import { Link } from "react-router-dom";

const DiscountOne = () => {
  return (
    <section className="discount py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-6">
            <div className="discount-item rounded-16 overflow-hidden position-relative z-1 h-100 d-flex flex-column align-items-start justify-content-center">
              <img
                src="assets/images/bg/discount-bg1.jpg"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
              />
              <div className="w-100 flex-between gap-20">
                <div className="discount-item__content">
                  <span className="fw-semibold text-tertiary-600 mb-20">
                    Best Laser Printers for Home & Office
                  </span>
                  <p className="mb-20">
                    Discover high-performance laser printers built for speed,
                    precision, and efficiency. At WEBSITE NAME, we offer
                    top-rated models perfect for home offices and businesses,
                    delivering crisp prints, low maintenance, and cost-effective
                    operation every day.
                  </p>
                  <Link
                    to="/laser-printers"
                    className="btn btn-outline-white d-inline-flex align-items-center gap-8"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-shopping-cart-simple" />
                    </span>
                  </Link>
                </div>
                <img
                  src="assets/images/thumbs/discount-img1.png"
                  alt=""
                  className="d-sm-block d-none"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="discount-item rounded-16 overflow-hidden position-relative z-1 h-100 d-flex flex-column align-items-center justify-content-center">
              <img
                src="assets/images/bg/discount-bg2.jpg"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
              />
              <div className="w-100 flex-between gap-20">
                <div className="discount-item__content">
                  <span className="fw-semibold text-tertiary-600 mb-20">
                    Premium Ink, Toner & Paper Supplies
                  </span>
                  <p className="mb-20">
                    Keep your printer running flawlessly with genuine ink,
                    toner, and paper from WEBSITE NAME. Designed for consistent
                    quality and smooth performance, our supplies ensure
                    professional results and long-lasting reliability for every
                    print job.
                  </p>
                  <Link
                    to="/toner-papers"
                    className="btn btn-outline-white d-inline-flex align-items-center gap-8"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-shopping-cart-simple" />
                    </span>
                  </Link>
                </div>
                <img
                  src="assets/images/thumbs/discount-img2.png"
                  alt=""
                  className="d-sm-block d-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountOne;
