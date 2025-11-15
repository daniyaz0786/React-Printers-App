import React from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "Perfect for Every Family",
    description:
      "Discover affordable printers that make everyday tasks simple — from homework and creative projects to holiday cards and photo prints. At WEBSITE NAME, we offer reliable, budget-friendly options that deliver impressive results for every family, keeping quality and convenience within reach.",
    buttonText: "Shop Printers Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    title: "Built for Business Performance",
    description:
      "When deadlines matter and reliability is key, WEBSITE NAME brings you powerful printers built for nonstop productivity. These dependable machines handle heavy workloads effortlessly, ensuring every document is crisp, clear, and delivered on time keeping your business operations smooth and stress-free.",
    buttonText: "Explore Business Printers",
    buttonLink: "/shop",
  },
  {
    id: 3,
    title: "Everything You Need in One Place",
    description:
      "No more rushing from store to store. At WEBSITE NAME, you’ll find ink, paper, and all your essential office supplies together — ready to ship fast. Enjoy seamless printing with everything you need delivered straight to your door for complete convenience and reliable performance.",
    buttonText: "Shop Supplies",
    buttonLink: "/shop",
  },
];

const PromotionalTwo = () => {
  return (
    <section className="offer">
      <div className="container container-lg">
        <div style={{ padding: "80px" }}>
          <h4 className="text-center">Featured Products for Every Need</h4>
          <p className="text-center" style={{ fontSize: "16px" }}>
            Explore top-rated printers and supplies from WEBSITE NAME, perfectly
            chosen for home offices and businesses seeking quality, reliability,
            and performance every day.
          </p>

          <div className="row gy-4" style={{ marginTop: "50px" }}>
            <div className="col-sm-6">
              <div className="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1">
                <img
                  src="assets/images/shape/offer-shape.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                />
                <div className="offer-card__thumb d-lg-block d-none">
                  <img src="assets/images/thumbs/offer-img2.png" alt="" />
                </div>
                <div className="py-xl-4">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src="assets/images/thumbs/printer.png" alt="" />
                  </div>
                  <h4 className="text-white mb-8">Home Printer Collection</h4>
                  <div className="flex-align gap-8">
                    <span className="text-sm text-white">
                      Reliable, affordable printers for family use
                    </span>
                  </div>
                  <Link
                    to="/home-printers"
                    className="btn btn-outline-white d-inline-flex align-items-center gap-8 mt-30"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-shopping-cart-simple" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="offer-card position-relative rounded-16 bg-main-600 overflow-hidden p-16 flex-align gap-16 flex-wrap z-1">
                <img
                  src="assets/images/shape/offer-shape.png"
                  alt=""
                  className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 opacity-6"
                />
                <div className="offer-card__thumb d-lg-block d-none">
                  <img src="assets/images/thumbs/offer-img2.png" alt="" />
                </div>
                <div className="py-xl-4">
                  <div className="offer-card__logo mb-16 w-80 h-80 flex-center bg-white rounded-circle">
                    <img src="assets/images/thumbs/printer.png" alt="" />
                  </div>
                  <h4 className="text-white mb-8">Office Printer Solutions</h4>
                  <div className="flex-align gap-8">
                    <span className="text-sm text-white">
                      High-performance laser printers for business
                    </span>
                  </div>
                  <Link
                    to="/office-printers"
                    className="btn btn-outline-white d-inline-flex align-items-center gap-8 mt-30"
                  >
                    Shop Now
                    <span className="icon text-xl d-flex">
                      <i className="ph ph-shopping-cart-simple" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalTwo;
