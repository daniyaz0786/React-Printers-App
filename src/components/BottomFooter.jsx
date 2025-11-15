import React from "react";

const BottomFooter = () => {
  return (
    <div className="bottom-footer sec-blue py-8">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
          <p className="bottom-footer__text text-white">
            WEBSITE NAME © 2025. All Rights Reserved{" "}
          </p>
          <div className="flex-align gap-8 flex-wrap">
            <span className="text-sm text-white">We Are Accepting</span>
            <img src="assets/images/thumbs/payment-method.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
