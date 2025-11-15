import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CartSection = () => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart from sessionStorage
  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // ✅ Remove item from cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product removed from cart");
  };

  // ✅ Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price || 0) * (item.quantity || 1),
    0
  );
  const estimatedTax = subtotal > 0 ? 10 : 0;
  const total = subtotal + estimatedTax;

  // ✅ Random tags generator
  const generateTags = (productName) => {
    const words = productName.split(" ");
    const tagSamples = [
      "Printer",
      "Office",
      "Ink",
      "Paper",
      "Laser",
      "Compact",
      "Wireless",
      "Eco",
      "HP",
      "Canon",
      "Smart",
    ];
    return Array.from(
      new Set([
        ...words.slice(0, 2),
        ...tagSamples.sort(() => 0.5 - Math.random()).slice(0, 2),
      ])
    );
  };

  return (
    <section className="cart py-80">
      <div className="container container-lg">
        {cartItems.length === 0 ? (
          <div className="text-center py-80">
            <h4>Your cart is empty 🛒</h4>
            <Link to="/" className="btn btn-main mt-16">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row gy-4">
            {/* 🧾 Cart Table */}
            <div className="col-xl-9 col-lg-8">
              <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                  <table className="table style-three">
                    <thead>
                      <tr>
                        <th className="text-lg fw-bold">Delete</th>
                        <th className="text-lg fw-bold">Product Name</th>
                        <th className="text-lg fw-bold">Price</th>
                        <th className="text-lg fw-bold">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        const randomRating = (Math.random() * 1 + 4).toFixed(1);
                        const randomReviews = Math.floor(Math.random() * 9000);
                        const tags = generateTags(item.name);

                        return (
                          <tr key={item.id}>
                            <td>
                              <button
                                type="button"
                                className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                                onClick={() => handleRemove(item.id)}
                              >
                                <i className="ph ph-x-circle text-2xl d-flex" />
                                Remove
                              </button>
                            </td>
                            <td>
                              <div className="table-product d-flex align-items-center gap-24">
                                <Link
                                  to={`/product/${item.id}`}
                                  className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                                >
                                  <img
                                    src={
                                      item.imageUrl ||
                                      "/assets/images/thumbs/product-two-img1.png"
                                    }
                                    alt={item.name}
                                    style={{ width: "80px", borderRadius: 8 }}
                                  />
                                </Link>
                                <div className="table-product__content text-start">
                                  <h6 className="title text-lg fw-semibold mb-8">
                                    <Link
                                      to={`/product/${item.id}`}
                                      className="link text-line-2"
                                    >
                                      {item.name}
                                    </Link>
                                  </h6>

                                  <div class="cart-meta">
                                    <span class="cart-badge cart-qty">
                                      Qty: {item.quantity || 1}
                                    </span>
                                    <span class="cart-badge cart-warranty">
                                      1-Year Warranty
                                    </span>

                                    <div class="cart-badge protected">
                                      <i class="ph ph-shield-check"></i>{" "}
                                      Protected Purchase
                                    </div>
                                  </div>

                                  <div className="flex-align gap-16 mb-16">
                                    <div className="flex-align gap-6">
                                      <span className="text-md fw-medium text-warning-600 d-flex">
                                        <i className="ph-fill ph-star" />
                                      </span>
                                      <span className="text-md fw-semibold text-gray-900">
                                        {randomRating}
                                      </span>
                                    </div>
                                    <span className="text-sm fw-medium text-gray-200">
                                      |
                                    </span>
                                    <span className="text-neutral-600 text-sm">
                                      {randomReviews} Reviews
                                    </span>
                                  </div>
                                  <div className="flex-align gap-8 flex-wrap">
                                    <div class="cart-tags">
                                      <span class="cart-tag cart-blue">
                                        <i class="ph ph-wifi-high"></i> Wireless
                                        Connectivity
                                      </span>
                                      <span class="cart-tag cart-green">
                                        <i class="ph ph-gear"></i> Easy Setup
                                      </span>
                                      <span class="cart-tag cart-yellow">
                                        <i class="ph ph-lightning"></i> Fast
                                        Printing
                                      </span>
                                      <span class="cart-tag cart-purple">
                                        <i class="ph ph-printer"></i> Mobile
                                        Printing
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-lg fw-semibold">
                                ${item.price}
                              </span>
                            </td>
                            <td>
                              <span className="text-lg fw-semibold">
                                $
                                {(item.price * (item.quantity || 1)).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 💰 Sidebar Totals */}
            <div className="col-xl-3 col-lg-4">
              <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
                <h6 className="text-xl mb-32">Cart Totals</h6>
                <div className="bg-color-three rounded-8 p-24">
                  <div className="mb-32 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two">
                      Subtotal
                    </span>
                    <span className="text-gray-900 fw-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="mb-32 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two">
                      Estimated Delivery
                    </span>
                    <span className="text-gray-900 fw-semibold">Free</span>
                  </div>
                  <div className="mb-0 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two">
                      Estimated Tax
                    </span>
                    <span className="text-gray-900 fw-semibold">
                      ${estimatedTax.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="bg-color-three rounded-8 p-24 mt-24">
                  <div className="flex-between gap-8">
                    <span className="text-gray-900 text-xl fw-semibold">
                      Total
                    </span>
                    <span className="text-gray-900 text-xl fw-semibold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-main mt-40 py-18 w-100 rounded-8"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartSection;
