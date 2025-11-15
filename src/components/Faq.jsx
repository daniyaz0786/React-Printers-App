import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, UPI, PayPal, and Net Banking options for your convenience. Our payment gateways are encrypted and secure, ensuring your transaction details remain safe. You can also use select EMI options on higher-value purchases to make your shopping easier and more flexible.",
  },
  {
    id: 2,
    question: "Do you offer free shipping on all orders?",
    answer:
      "Yes, we offer free shipping on all orders above $50 within USA. For smaller purchases, a minimal delivery charge may apply based on your location. All orders are carefully packed and shipped through trusted courier partners to ensure your products reach you safely and on time.",
  },
  {
    id: 3,
    question: "How can I track my order after purchase?",
    answer:
      "Once your order has been processed and shipped, you will receive an email and SMS notification containing a tracking link. You can use this link to view the real-time status of your delivery. Alternatively, you can log in to your account on our website to check tracking updates anytime.",
  },
  {
    id: 4,
    question: "Are the products genuine and under warranty?",
    answer:
      "Absolutely. All our products are 100% genuine and sourced directly from authorized distributors or manufacturers. Each item comes with an official brand warranty, ensuring that you receive authentic, high-quality products. If you face any issue, our support team will guide you through the warranty claim process easily.",
  },
  {
    id: 5,
    question: "Can I return or replace a product if I am not satisfied?",
    answer:
      "Yes, customer satisfaction is our top priority. We offer a simple return and replacement policy within 7 days of delivery for most products. The item must be unused, in original packaging, and accompanied by the invoice. Once inspected, refunds or replacements are processed promptly without unnecessary delays.",
  },
  {
    id: 6,
    question: "Do you provide installation or setup assistance?",
    answer:
      "For printers, cartridges, and electronic accessories, we provide detailed setup guides and video tutorials. In select cases, our technical team can assist remotely to help you configure your product. We aim to ensure that you can start using your new purchase quickly, without any technical difficulties.",
  },
  {
    id: 7,
    question: "What should I do if I receive a damaged or incorrect item?",
    answer:
      "If your product arrives damaged, defective, or not as described, please contact our support team within 48 hours of delivery. We will verify the issue and arrange for a quick replacement or refund. Please keep the packaging and invoice intact to ensure a smooth resolution process.",
  },
  {
    id: 8,
    question: "How can I contact customer support for queries or issues?",
    answer:
      "Our expert support team is available 24/7 to assist you with orders, technical questions, or returns. You can reach us via live chat, email, or the contact form on our website. We’re committed to resolving all your concerns promptly and ensuring a seamless shopping experience every time.",
  },
];

const PromotionalTwo = () => {
  const [activeId, setActiveId] = useState(null);
  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="offer sec-grey">
      <div className="container container-lg">
        <div style={{ padding: "80px" }}>
          <h4 className="text-center">Frequently Asked Questions</h4>
          <p className="text-center" style={{ fontSize: "16px" }}>
            Find quick answers to common questions about printers, ink
            cartridges, shipping, and support. At WEBSITE NAME, we make it easy
            to understand your options, solve issues fast, and get the most out
            of your printing experience — all in one convenient place.
          </p>

          {/* --- FAQ Section --- */}
          <div className="faq-section mt-10">
            <div className="row gy-4">
              {faqData.map((faq) => (
                <div className="col-lg-6 col-md-6" key={faq.id}>
                  <div
                    className={`faq-item ${
                      activeId === faq.id ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="faq-question d-flex justify-content-between align-items-center">
                      <h5>{faq.question}</h5>
                      <span className="icon">
                        {activeId === faq.id ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className="faq-answer"
                      style={{
                        maxHeight: activeId === faq.id ? "200px" : "0px",
                        opacity: activeId === faq.id ? "1" : "0",
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link
                to="/shop"
                className="btn btn-outline-white d-inline-flex align-items-center gap-8 mt-48"
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
    </section>
  );
};

export default PromotionalTwo;
