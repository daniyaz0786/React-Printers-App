import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("payment1");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };
  return (
    <section className="checkout-section py-80">
      <div className="container container-lg">
        <div className="row g-4">
          {/* LEFT SIDE */}
          <div className="col-lg-8">
            {/* Contact Information */}
            <div className="checkout-card mb-4">
              <div className="checkout-card-header bg-gradient-primary text-white px-4 py-3 rounded-top-8 d-flex align-items-center gap-2">
                <i className="ph ph-user text-xl"></i>
                <h5 className="mb-0 fw-semibold">Contact Information</h5>
              </div>
              <div className="checkout-card-body bg-white shadow-sm p-4 rounded-bottom-8">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="checkout-label fw-medium mb-5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="checkout-label fw-medium mb-5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="Kapoor"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="checkout-label fw-medium mb-5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="checkout-input"
                      placeholder="john@example.com"
                    />
                    <small className="text-muted d-block mt-1">
                      Using email from your account
                    </small>
                  </div>
                  <div className="col-md-12">
                    <label className="checkout-label fw-medium mb-5">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="833-551-6033"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="checkout-card mt-5">
              <div className="checkout-card-header bg-gradient-success text-white px-4 py-3 rounded-top-8 d-flex align-items-center gap-2">
                <i className="ph ph-map-pin text-xl"></i>
                <h5 className="mb-0 fw-semibold">Shipping Address</h5>
              </div>
              <div className="checkout-card-body bg-white shadow-sm p-4 rounded-bottom-8">
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="checkout-label fw-medium mb-5">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="checkout-label fw-medium mb-5">
                      City *
                    </label>
                    <select className="checkout-input">
                      <option>Select City</option>
                      <option>New York</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="checkout-label fw-medium mb-5">
                      State *
                    </label>
                    <select className="checkout-input">
                      <option>Select State</option>
                      <option>California</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="checkout-label fw-medium mb-5">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}

            {/* Credit Card Box (appears when "Pay with Credit Card" is selected) */}
            <div className="checkout-card mt-5">
              <div className="checkout-card-header bg-gradient-success text-white px-4 py-3 rounded-top-8 d-flex align-items-center gap-2">
                <i className="ph ph-credit-card text-xl"></i>
                <h5 className="mb-0 fw-semibold">Credit Card Details</h5>
              </div>
              <div className="checkout-card-body bg-white shadow-sm p-4 rounded-bottom-8">
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="checkout-label fw-medium mb-5">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="checkout-label fw-medium mb-5">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="checkout-label fw-medium mb-5">
                      CVV *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="123"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="checkout-label fw-medium mb-5">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      className="checkout-input"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">
            <div className="checkout-summary-card bg-white shadow-sm rounded-8">
              <div className="checkout-summary-header bg-dark text-white px-4 py-3 rounded-top-8">
                <h5 className="mb-0 fw-semibold my-css">Order Summary</h5>
              </div>
              <div className="checkout-summary-body">
                <div className="checkout-item d-flex justify-content-between mb-3">
                  <div>
                    <h6 className="mb-1 text-gray-900">
                      HP 206X High Yield Magenta LaserJet Cartridge
                    </h6>
                    <small className="text-muted">Qty: 1</small>
                  </div>
                  <span className="fw-semibold text-gray-900">$132.99</span>
                </div>
                <div className="checkout-item d-flex justify-content-between mb-20">
                  <div>
                    <h6 className="mb-1 text-gray-900 mt-32">
                      ENVY Inspire 7955e All-in-One Printer
                    </h6>
                    <small className="text-muted">Qty: 1</small>
                  </div>
                  <span className="fw-semibold text-gray-900">$159.99</span>
                </div>

                <hr className="my-3" />
                <div className="d-flex justify-content-between mb-2 mt-32">
                  <span className="text-gray-800">Subtotal</span>
                  <span>$292.98</span>
                </div>
                <div className="d-flex justify-content-between mb-2 mt-18">
                  <span className="text-gray-800">Shipping</span>
                  <a href="#" className="text-primary fw-medium">
                    Calculated
                  </a>
                </div>
                <div className="d-flex justify-content-between mb-3  mt-18">
                  <span className="text-gray-800">Tax</span>
                  <span>$23.44</span>
                </div>
                <hr />

                <div className="mt-20 mb-20">
                  <div className="checkout-payment-options">
                    {/* Option 1: Credit Card */}
                    <label className="checkout-payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        className="checkout-payment-radio"
                      />
                      <div className="checkout-payment-content">
                        <i className="ph ph-credit-card text-primary text-lg me-3"></i>
                        <div className="pay-credit">
                          <h6 className="fw-semibold mb-1">
                            Pay with Credit Card
                          </h6>
                          <small className="text-gray-600">
                            Secure online payment with instant confirmation
                          </small>
                        </div>
                      </div>
                    </label>

                    {/* Option 2: Cash on Delivery */}
                    <label className="checkout-payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        className="checkout-payment-radio"
                      />
                      <div className="checkout-payment-content">
                        <i className="ph ph-hand-coins text-warning text-lg me-3"></i>
                        <div className="pay-credit">
                          <h6 className="fw-semibold mb-1">Cash on Delivery</h6>
                          <small className="text-gray-600">
                            Pay in cash when your order arrives at your doorstep
                          </small>
                        </div>
                      </div>
                    </label>

                    {/* Option 3: Card on Delivery */}
                    <label className="checkout-payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cardOnDelivery"
                        className="checkout-payment-radio"
                      />
                      <div className="checkout-payment-content">
                        <i className="ph ph-identification-badge text-success text-lg me-3"></i>
                        <div className="pay-credit">
                          <h6 className="fw-semibold mb-1">
                            Card Payment on Delivery
                          </h6>
                          <small className="text-gray-600">
                            Pay with card when our delivery agent arrives
                          </small>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h6 className="fw-semibold text-gray-900">Total</h6>
                  <h5 className="fw-bold text-dark">$316.42</h5>
                </div>
                <button className="btn w-100 py-3 text-white fw-semibold checkout-btn-gradient rounded-8">
                  <i className="ph ph-lock text-lg me-2"></i> Place Order -
                  $316.42
                </button>
                <div className="text-center mt-3 d-flex align-items-center justify-content-center gap-2 mt-32">
                  <i className="ph ph-shield-check text-success"></i>
                  <small className="text-gray-600">
                    Protected by 256-bit SSL encryption
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
