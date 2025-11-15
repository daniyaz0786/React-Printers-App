import React from "react";
import { Link } from "react-router-dom";

const PromotionalTwo = () => {
  return (
    <section className="promotional-banner" style={{ background: "#2562eb" }}>
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-sm-12 text-center" style={{ padding: "50px" }}>
            <h4 className="text-white">Best Printers for Home & Office</h4>
            <p className="text-white" style={{ fontSize: "20px" }}>
              From family photos to daily business documents, find the perfect
              HP printer and supplies for every need. Choose from wireless home
              models to high-performance office machines, along with the ink and
              paper to keep your printing seamless and efficient.
            </p>

            <div className="flex">
              <Link
                to="/home-printers"
                className="btn btn-outline-white d-inline-flex align-items-center blue-btn gap-8 mt-48"
                style={{
                  background: "white",
                  marginLeft: "20px",
                }}
              >
                Shop Home Printers
                <span className="icon text-xl d-flex">
                  <i className="ph ph-shopping-cart-simple" />
                </span>
              </Link>
              <Link
                to="/office-printers"
                className="btn btn-outline-white d-inline-flex align-items-center blue-btn gap-8 mt-48"
                style={{ background: "white", marginLeft: "20px" }}
              >
                Shop Office Printers
                <span className="icon text-xl d-flex">
                  <i className="ph ph-shopping-cart-simple" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalTwo;
