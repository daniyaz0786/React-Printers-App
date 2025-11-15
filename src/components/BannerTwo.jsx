import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BannerTwo = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="banner-two">
      <div className="container container-lg">
        <div className="banner-two-wrapper d-flex align-items-start">
          <div className="banner-item-two-wrapper overflow-hidden position-relative arrow-center flex-grow-1 mb-0">
            <img
              src="assets/images/bg/banner-two.jpg"
              alt=""
              className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover"
            />
            <div className="banner-item-two__slider">
              <Slider {...settings}>
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="text-white mb-8">
                      Complete Office & Printing Solutions Daniyaz
                    </h2>
                    <p className="banner-item-two__title bounce text-white">
                      Explore the latest OfficeJet Pro printers designed for
                      modern businesses — featuring wireless connectivity,
                      mobile printing, and exceptional print quality to keep
                      your workflow efficient and professional.
                    </p>
                    <Link
                      to="/office-printers"
                      className="btn btn-outline-white d-inline-flex align-items-center gap-8 mt-48"
                    >
                      Shop Now
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shopping-cart-simple" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="text-white mb-8">
                      Home & Office Printing Solutions
                    </h2>
                    <p className="banner-item-two__title bounce text-white">
                      Experience fast, reliable, and professional printing with
                      genuine HP printers, inks, and paper supplies — all
                      available with same-day delivery and competitive prices to
                      keep your business running smoothly.
                    </p>
                    <Link
                      to="/home-printers"
                      className="btn btn-outline-white d-inline-flex align-items-center gap-8 mt-48"
                    >
                      Shop Now
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shopping-cart-simple" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0"></div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
