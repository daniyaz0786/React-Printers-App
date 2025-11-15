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
    <section className="promotional-banner">
      <div className="container container-lg">
        <div className="text-center" style={{ padding: "50px" }}>
          <h4>Why Choose WEBSITE NAME for Your Printing Needs?</h4>
          <p style={{ fontSize: "16px" }}>
            Every home and business has unique printing requirements — and at
            WEBSITE NAME, we’ve got you covered. From compact home inkjets to
            high-performance office laser printers, we offer a full range of
            solutions to match your workflow and budget. Our expert team
            understands printers inside and out, helping you choose the perfect
            device and supplies for your specific needs.
          </p>

          <div className="row">
            {cardsData.map((card) => (
              <div className="col-sm-4" key={card.id}>
                <div className="cardsarea">
                  <div className="boxblue">
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                    <Link
                      to={card.buttonLink}
                      className="btn btn-outline-white d-inline-flex align-items-center gap-8 mt-48"
                    >
                      {card.buttonText}
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shopping-cart-simple" />
                      </span>
                    </Link>
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
