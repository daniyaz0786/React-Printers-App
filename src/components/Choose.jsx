import React from "react";
import { Link } from "react-router-dom";
const shippingData = [
  {
    id: 1,
    icon: "ph-fill ph-truck",
    title: "Fast & Reliable Delivery",
    description: "Quick shipping gets your supplies fast.",
  },
  {
    id: 2,
    icon: "ph-fill ph-seal-check",
    title: "Authentic Products",
    description: "Genuine HP items with full warranty.",
  },
  {
    id: 3,
    icon: "ph-fill ph-tag",
    title: "Best Prices",
    description: "Save more with top deals daily.",
  },
  {
    id: 4,
    icon: "ph-fill ph-headset",
    title: "Expert Support",
    description: "24/7 help from certified experts.",
  },
];

const PromotionalTwo = () => {
  return (
    <section className="offer">
      <div className="container container-lg">
        <div style={{ padding: "80px" }}>
          <h4 className="text-center">
            Trusted Printing Solutions That Work Every Time
          </h4>
          <p className="text-center" style={{ fontSize: "16px" }}>
            Whether you need a wireless home printer that connects seamlessly or
            a powerful office printer built for busy days, WEBSITE NAME has you
            covered. Every model we offer is tested for performance and
            reliability, paired with genuine ink cartridges and essential office
            supplies to keep your printing smooth and stress-free.
          </p>

          <div className="row gy-4 mt-40 mb-30">
            {shippingData.map((item) => (
              <div className="col-xxl-6 col-sm-6" key={item.id}>
                <div className="shipping-item flex-align gap-16 rounded-16 boxblue transition-2">
                  <span
                    className={`w-56 h-56 flex-center rounded-circle sec-blue text-white text-32 flex-shrink-0`}
                  >
                    <i className={item.icon} />
                  </span>
                  <div>
                    <h6 className="mb-0">{item.title}</h6>
                    <span className="text-sm text-heading">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalTwo;
