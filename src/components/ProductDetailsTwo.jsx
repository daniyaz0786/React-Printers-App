import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";

const ProductDetailsTwo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // randoms
  const [sku, setSku] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (product?.name) {
      const words = product.name.split(" ").filter((w) => w.length > 3);

      const fallbackTags = [
        "Hot Deal",
        "Best Seller",
        "Limited Stock",
        "Top Rated",
      ];

      const allTags = [...words, ...fallbackTags]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      setTags(allTags);
    }
  }, [product?.name]);

  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        if (found) {
          setProduct(found);

          // parse additional images safely
          let additional = [];
          try {
            if (found.additionalImages) {
              const parsed = JSON.parse(found.additionalImages);
              if (Array.isArray(parsed)) additional = parsed;
            }
          } catch (e) {
            console.error("Invalid additionalImages format", e);
          }

          // main image + additional
          setMainImage(found.imageUrl || "assets/images/thumbs/default.png");
          setProductImages([found.imageUrl, ...additional]);
        }

        // random fields
        const randomSku =
          "EB" +
          Math.random().toString(36).substring(2, 6).toUpperCase() +
          Math.floor(Math.random() * 900 + 100);
        setSku(randomSku);

        const randomRating = (Math.random() * 1 + 4).toFixed(1);
        setRating(randomRating);

        const randomReviews = Math.floor(Math.random() * 24000 + 1000);
        setReviews(randomReviews);

        const randomShipping = Math.random() < 0.5 ? 0 : 10;
        setShipping(randomShipping);
      });
  }, [id]);

  // Countdown (if needed)
  const [timeLeft, setTimeLeft] = useState(getCountdown());
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getCountdown()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Quantity controls
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  if (!product) return <div className="text-center py-80">Loading...</div>;

  return (
    <section className="product-details py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-9">
            <div className="row gy-4">
              {/* Left Image Section */}
              <div className="col-xl-6">
                <div className="product-details__left">
                  <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                    <div className="product-details__thumb flex-center h-100">
                      <img src={mainImage} alt={product.name} />
                    </div>
                  </div>
                  {/* Under thumbnails */}
                  <div className="mt-24">
                    <div className="product-details__images-slider">
                      <Slider {...settingsThumbs}>
                        {productImages.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => setMainImage(image)}
                            className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8 cursor-pointer"
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index}`}
                              style={{
                                maxHeight: "100px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="col-xl-6">
                <div className="product-details__content">
                  <h5 className="mb-12">{product.name}</h5>

                  <div className="flex-align flex-wrap gap-12">
                    <div className="flex-align gap-12 flex-wrap">
                      <div className="flex-align gap-8">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-15 fw-medium text-warning-600 d-flex"
                          >
                            <i className="ph-fill ph-star" />
                          </span>
                        ))}
                      </div>
                      <span className="text-sm fw-medium text-neutral-600">
                        {rating} Star Rating
                      </span>
                      <span className="text-sm fw-medium text-gray-500">
                        ({reviews.toLocaleString()})
                      </span>
                    </div>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      <span className="text-gray-400">SKU:</span> {sku}
                    </span>
                  </div>

                  <div className="mt-30 mb-30">
                    <label
                      htmlFor="stock"
                      className={`text-lg mb-8 fw-semibold d-block ${
                        product?.stock > 0 ? "text-success" : "text-danger"
                      }`}
                    >
                      {product?.stock > 0
                        ? `In Stock — ${product.stock} available`
                        : "Out of Stock"}
                    </label>
                  </div>

                  <div class="features-box mt-40">
                    <h3>Key Features</h3>
                    <div class="features-grid">
                      <div class="feature-item blue">
                        <i class="ph-fill ph-printer"></i>
                        <span>Print</span>
                      </div>
                      <div class="feature-item green">
                        <i class="ph-fill ph-scan"></i>
                        <span>Scan</span>
                      </div>
                      <div class="feature-item purple">
                        <i class="ph-fill ph-copy"></i>
                        <span>Copy</span>
                      </div>
                      <div class="feature-item orange">
                        <i class="ph-fill ph-phone"></i>
                        <span>Fax</span>
                      </div>
                      <div class="feature-item sky">
                        <i class="ph-fill ph-wifi-high"></i>
                        <span>Wireless</span>
                      </div>
                      <div class="feature-item violet">
                        <i class="ph-fill ph-device-mobile"></i>
                        <span>Mobile Print</span>
                      </div>
                      <div class="feature-item teal">
                        <i class="ph-fill ph-usb"></i>
                        <span>USB Connect</span>
                      </div>
                      <div class="feature-item cyan">
                        <i class="ph-fill ph-cloud"></i>
                        <span>Cloud Print</span>
                      </div>
                      <div class="feature-item yellow">
                        <i class="ph-fill ph-lightning"></i>
                        <span>Fast Speed</span>
                      </div>
                      <div class="feature-item green-light">
                        <i class="ph-fill ph-leaf"></i>
                        <span>Eco-Friendly</span>
                      </div>
                      <div class="feature-item red">
                        <i class="ph-fill ph-arrows-clockwise"></i>
                        <span>Auto Duplex</span>
                      </div>
                      <div class="feature-item mint">
                        <i class="ph-fill ph-drop-half"></i>
                        <span>Ink Efficient</span>
                      </div>
                    </div>
                  </div>

                  <div className="my-32 flex-align gap-16 flex-wrap">
                    <div className="flex-align gap-8">
                      <div className="flex-align gap-8 text-main-two-600">
                        <i className="ph-fill ph-seal-percent text-xl" />
                        -10%
                      </div>
                      <h6 className="mb-0">USD {product.price}</h6>
                    </div>
                    <div className="flex-align gap-8">
                      <span className="text-gray-700">Regular Price</span>
                      <h6 className="text-xl text-gray-400 mb-0 fw-medium">
                        USD {(product.price * 1.2).toFixed(2)}
                      </h6>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="my-32 flex-align flex-wrap gap-12">
                    {tags.map((tag, i) => (
                      <Link
                        key={i}
                        to="#"
                        className="px-12 py-8 text-sm rounded-8 flex-align gap-8 text-gray-900 border border-gray-200 hover-border-main-600 hover-text-main-600"
                      >
                        {tag}
                        <i className="ph ph-caret-right" />
                      </Link>
                    ))}
                  </div>

                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />

                  {/* Info Cards */}
                  <div className="row gy-4">
                    {[
                      {
                        icon: "ph-fill ph-car-profile",
                        title: "Free Shipping",
                      },
                      {
                        icon: "ph-fill ph-hand-heart",
                        title: "100% Satisfaction",
                      },
                      {
                        icon: "ph-fill ph-credit-card",
                        title: "Secure Payments",
                      },
                      { icon: "ph-fill ph-chats", title: "24/7 Support" },
                    ].map((item, i) => (
                      <div key={i} className="col-xxl-6 col-sm-6">
                        <div className="flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2 p-16">
                          <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                            <i className={item.icon} />
                          </span>
                          <div>
                            <h6 className="mb-0" style={{ fontSize: "14px" }}>
                              {item.title}
                            </h6>
                            <span
                              className="text-heading"
                              style={{ fontSize: "12px" }}
                            >
                              Free shipping all over the US
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <span className="fw-medium text-gray-900 mt-40">
                      100% Guarantee Safe Checkout
                    </span>
                    <div className="mt-10">
                      <img src="assets/images/thumbs/gateway-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-3">
            <div className="product-details__sidebar py-40 px-32 border border-gray-100 rounded-16">
              <div className="mb-32">
                <div className="d-flex rounded-4 overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    type="button"
                    className="quantity__minus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-minus" />
                  </button>
                  <input
                    type="number"
                    className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-16"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    type="button"
                    className="quantity__plus flex-shrink-0 h-48 w-48 text-neutral-600 bg-gray-50 flex-center hover-bg-main-600 hover-text-white"
                  >
                    <i className="ph ph-plus" />
                  </button>
                </div>
              </div>

              <div className="mb-32">
                <div className="flex-between border-bottom border-gray-100 pb-16 mb-16">
                  <span className="text-gray-500">Price</span>
                  <h6 className="text-lg mb-0">${product.price}</h6>
                </div>
                <div className="flex-between">
                  <span className="text-gray-500">Shipping</span>
                  <h6 className="text-lg mb-0">From ${shipping.toFixed(2)}</h6>
                </div>
              </div>

              <Link
                to="#"
                className="btn btn-main flex-center gap-8 rounded-8 py-16 fw-normal mt-48"
              >
                <i className="ph ph-shopping-cart-simple text-lg" />
                Add To Cart
              </Link>
              <Link
                to="#"
                className="btn btn-outline-main rounded-8 py-16 fw-normal mt-16 w-100"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-80">
          <div className="product-dContent border rounded-24">
            <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
              <ul
                className="nav common-tab nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                  >
                    Specification
                  </button>
                </li>
              </ul>
              <Link
                to="#"
                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
              >
                <img src="assets/images/icon/satisfaction-icon.png" alt="" />
                100% Satisfaction Guaranteed
              </Link>
            </div>

            <div className="product-dContent__box">
              <div className="tab-content" id="pills-tabContent">
                {/* -------- DESCRIPTION TAB -------- */}
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                  tabIndex={0}
                >
                  <div className="mb-40">
                    <h6 className="mb-24">Product Description</h6>

                    <div class="feature-inline-box mt-40 mb-40">
                      <div class="feature-inline-item">
                        <i class="ph-fill ph-check-circle"></i>
                        <span>Print, scan, copy, and fax functionality</span>
                      </div>
                      <div class="feature-inline-item">
                        <i class="ph-fill ph-check-circle"></i>
                        <span>Wireless and mobile printing support</span>
                      </div>
                      <div class="feature-inline-item">
                        <i class="ph-fill ph-check-circle"></i>
                        <span>Automatic duplex printing</span>
                      </div>
                      <div class="feature-inline-item">
                        <i class="ph-fill ph-check-circle"></i>
                        <span>High-yield ink cartridges</span>
                      </div>
                    </div>

                    <p
                      className="text-gray-700"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {product?.description || "No description available."}
                    </p>

                    {product?.compatibility && (
                      <>
                        <h6 className="mt-32 mb-16">Compatibility</h6>
                        <p
                          className="text-gray-700"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {product.compatibility}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* -------- SPECIFICATIONS TAB -------- */}
                <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                  tabIndex={0}
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <h6 className="mb-24">Product Specifications</h6>

                      {product?.specifications ? (
                        <ul
                          className="text-gray-700"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.8",
                            listStyle: "disc",
                          }}
                        >
                          {product.specifications
                            .split(/\n+/) // split on new lines
                            .map((line, i) => {
                              const cleaned = line.trim();
                              return cleaned ? (
                                <li key={i}>{cleaned}</li>
                              ) : null;
                            })}
                        </ul>
                      ) : (
                        <p className="text-gray-500">
                          No specifications available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTwo;
