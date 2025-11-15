import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Marketing Manager",
    feedback:
      "Excellent service and fast delivery every time. The print quality exceeded expectations, and the website made ordering incredibly simple and convenient.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Graphic Designer",
    feedback:
      "I’ve ordered multiple cartridges, and they always arrive on time. Genuine quality, great support, and smooth checkout every single purchase experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Carter",
    role: "IT Specialist",
    feedback:
      "The best online store for office printing needs. Secure payment options, real-time tracking, and professional support make it absolutely reliable always.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Freelance Photographer",
    feedback:
      "Beautiful printing results on every project. I trust their genuine products completely, and customer support always responds quickly and efficiently too.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Williams",
    role: "Operations Director",
    feedback:
      "Highly recommend this store. Prices are fair, products are authentic, and delivery is quick — very dependable for all my office requirements.",
    rating: 4,
  },
  {
    id: 6,
    name: "Jessica Miller",
    role: "Content Creator",
    feedback:
      "Super easy to use website, fast service, and genuine cartridges. Every order has been perfect, reliable, and worth every penny invested here.",
    rating: 5,
  },
];

const PromotionalTwo = () => {
  return (
    <section className="offer sec-grey">
      <div className="container container-lg">
        <div style={{ padding: "80px" }}>
          <h4 className="text-center">What Our Customers Say</h4>
          <p className="text-center" style={{ fontSize: "16px" }}>
            Hear from our satisfied customers who trust WEBSITE NAME for
            authentic products, fast delivery, and friendly support. Their
            experiences speak for the quality and reliability we deliver.
          </p>

          <div className="row gy-4 mt-40 mb-30">
            {testimonials.map((item) => (
              <div className="col-xxl-4 col-sm-6" key={item.id}>
                <div className="testimonial-item p-4 rounded-3 testbox transition-2">
                  <p className="mb-3 text-muted">“{item.feedback}”</p>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="mt-10">
                      <h6 className="mb-0">{item.name}</h6>
                      <span className="text-sm text-secondary">
                        {item.role}
                      </span>
                    </div>
                    <div className="text-warning">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </div>
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
