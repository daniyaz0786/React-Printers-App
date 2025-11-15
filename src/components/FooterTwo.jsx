import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer className="footer py-80 sec-black">
      <div className="container container-lg">
        <div className="row gy-4">
          {/* ====== Column 1 (4 columns wide) ====== */}
          <div className="col-md-6">
            <div className="footer-logo mb-24">
              <Link to="/">
                <img src="assets/images/logo/logo-two-black.png" alt="Logo" />
              </Link>
            </div>

            <div class="trust-inline-box mt-30 mb-30">
              <div class="trust-item trust-green">
                <i class="ph ph-shield-check"></i>
                <div>
                  <h4>SSL Protected</h4>
                  <p>256-bit encryption</p>
                </div>
              </div>

              <div class="trust-item trust-blue">
                <i class="ph ph-truck"></i>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>2-day shipping available</p>
                </div>
              </div>

              <div class="trust-item trust-yellow">
                <i class="ph ph-star"></i>
                <div>
                  <h4>Quality Assured</h4>
                  <p>Manufacturer warranty</p>
                </div>
              </div>
            </div>

            <p className="mb-24 text-white">
              WEBSITE NAME offers the best printers, ink cartridges, and
              complete printing solutions for homes, offices, and businesses.
            </p>

            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                <i className="ph-fill ph-phone-call" />
              </span>
              <Link to="tel:+18888888888" className="text-md text-white">
                +1 (888)-888-8888
              </Link>
            </div>

            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                <i className="ph-fill ph-envelope" />
              </span>
              <Link
                to="mailto:support24@marketpro.com"
                className="text-md text-white"
              >
                support24@marketpro.com
              </Link>
            </div>

            <div className="flex-align gap-16 mb-16">
              <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
                <i className="ph-fill ph-map-pin" />
              </span>
              <span className="text-md text-white">
                789 Inner Lane, California, USA
              </span>
            </div>
          </div>

          {/* ====== Column 2 ====== */}
          <div className="col-md-2">
            <h6 className="footer-title text-white mb-16">About Us</h6>
            <ul className="footer-menu list-unstyled">
              <li className="mb-16">
                <Link to="/about-us" className="text-white foot-menu">
                  Company Profile
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/privacy-policy" className="text-white foot-menu">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-16">
                <Link
                  to="/terms-and-conditions"
                  className="text-white foot-menu"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/refund-policy" className="text-white foot-menu">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* ====== Column 3 ====== */}
          <div className="col-md-2">
            <h6 className="footer-title text-white mb-16">Customer Support</h6>
            <ul className="footer-menu list-unstyled">
              <li className="mb-16">
                <Link to="/order-track" className="text-white foot-menu">
                  Order Tracking
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/return-order" className="text-white foot-menu">
                  Return and Exchange
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/contact-us" className="text-white foot-menu">
                  Help Center
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/sitemap.xml" className="text-white foot-menu">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* ====== Column 4 ====== */}
          <div className="col-md-2">
            <h6 className="footer-title text-white mb-16">Categories</h6>
            <ul className="footer-menu list-unstyled">
              <li className="mb-16">
                <Link to="/home-printers" className="text-white foot-menu">
                  Home Printers
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/office-printers" className="text-white foot-menu">
                  Office Printers
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/inkjet-printers" className="text-white foot-menu">
                  Inkjet Printers
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/laser-printers" className="text-white foot-menu">
                  Laser Printers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="boxblue mt-30">
          <h6 className="tex-white flex-align gap-16">
            <span className="w-32 h-32 flex-center rounded-circle border border-gray-100 text-main-two-600 text-md flex-shrink-0">
              <i className="ph-fill ph-info" />
            </span>
            Important Legal Disclaimer
          </h6>
          <small>
            WEBSITE NAME is an independent online retailer. We are not
            affiliated with, endorsed by, or sponsored by HP Inc. or any other
            printer brand. We are not an authorized dealer or official
            representative of HP Inc.
          </small>

          <small>
            All trademarks, logos, and brand names mentioned on this website
            belong to their respective owners. References to these names, logos,
            or brands do not imply any endorsement. Products sold on our
            platform are sourced from trusted distributors and include
            manufacturer warranties. We provide independent retail services and
            customer support.
          </small>

          <small>
            HP, the HP logo, and all related marks are trademarks of HP Inc. All
            other trademarks are the property of their respective owners.
          </small>
        </div>

        <div className="mt-40">
          <small className="text-white" style={{ fontSize: "12px" }}>
            <strong>Important Notice :</strong> Product availability, pricing,
            delivery times, and specifications are subject to change without
            notice. Please verify all current details before making a purchase.
            Warranty coverage and terms are provided by the respective
            manufacturers and may vary by product. Delivery times are estimated
            and can differ based on location, product stock, and shipping
            method. Express delivery options are available only in select
            service areas. All price matching and promotional discounts are
            subject to eligibility, verification, and applicable terms.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
