import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const HeaderTwo = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  let debounceTimeout = useRef(null);

  // Fetch products once
  useEffect(() => {
    fetch("/assets/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // Debounced search
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      if (searchQuery.trim().length > 0) {
        const filteredResults = products.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFiltered(filteredResults.slice(0, 6)); // limit to top 6
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
        setFiltered([]);
      }
    }, 400);

    return () => clearTimeout(debounceTimeout.current);
  }, [searchQuery, products]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectProduct = (id) => {
    setShowDropdown(false);
    setSearchQuery("");
    navigate(`/product/${id}`);
  };

  // here

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = $(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className="overlay" />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <form action="#" className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for printers, ink, toner, papers..."
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__logo">
            <img src="assets/images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Home
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 0 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Home One
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/index-two"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Home Two
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Shop
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 1 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/shop"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Shop
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/product-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Shop Details
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/product-details-two"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Shop Details Two
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(2)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 2 ? "d-block" : ""
                }`}
              >
                <span className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">
                  New
                </span>
                <Link to="#" className="nav-menu__link">
                  Pages
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 2 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/cart"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Cart
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/checkout"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Checkout{" "}
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/account"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Account
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 3 ? "d-block" : ""
                }`}
              >
                <Link to="#" className="nav-menu__link">
                  Blog
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 3 ? "open" : ""
                  }`}
                >
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/blog"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Blog
                    </Link>
                  </li>
                  <li className="common-dropdown__item nav-submenu__item">
                    <Link
                      onClick={() => setActiveIndex(null)}
                      to="/blog-details"
                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"
                    >
                      {" "}
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item">
                <Link to="/contact" className="nav-menu__link">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}

      {/* ======================= Middle Top Start ========================= */}
      <div className="header-top flex-between sec-blue">
        <div className="container container-lg">
          <div className="flex-between flex-wrap gap-8">
            <ul className="flex-align flex-wrap d-none d-md-flex">
              <li className="border-right-item">
                <Link
                  to="shipping-policy"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  On-time Shippings On All Orders
                </Link>
              </li>
              <li className="border-right-item">
                <Link
                  to="refund-policy"
                  className="text-white text-sm hover-text-decoration-underline"
                >
                  30 Days Return Policy
                </Link>
              </li>
            </ul>
            <ul className="header-top__right flex-align flex-wrap">
              <li className="border-right-item">
                <Link
                  to="/account"
                  className="text-white text-sm py-8 flex-align gap-6"
                >
                  <span className="icon text-md d-flex">
                    {" "}
                    <i className="ph ph-headset" />{" "}
                  </span>
                  <span className="hover-text-decoration-underline">
                    Call Support : +1 (888)-888-8888
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ======================= Middle Top End ========================= */}

      {/* ======================= Middle Header Two Start ========================= */}
      <header className="header-middle style-two bg-color-neutral">
        <div className="container container-lg">
          <nav className="header-inner flex-between">
            {/* Logo Start */}
            <div className="logo">
              <Link to="/" className="link">
                <img src="assets/images/logo/logo-two.png" alt="Logo" />
              </Link>
            </div>
            {/* Logo End  */}
            {/* form Category Start */}
            <div className="flex-align gap-16">
              <div className="select-dropdown-for-home-two d-lg-none d-block">
                {/* Dropdown Select Start */}
                <ul className="header-top__right style-two flex-align flex-wrap">
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    {/* Display the selected language */}
                    <Link
                      to="#"
                      className="selected-text text-heading text-sm py-8"
                    >
                      {selectedLanguage}
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("English")}
                        >
                          <img
                            src="assets/images/thumbs/flag1.png"
                            alt="English"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("Japan")}
                        >
                          <img
                            src="assets/images/thumbs/flag2.png"
                            alt="Japan"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("French")}
                        >
                          <img
                            src="assets/images/thumbs/flag3.png"
                            alt="French"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("Germany")}
                        >
                          <img
                            src="assets/images/thumbs/flag4.png"
                            alt="Germany"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("Bangladesh")}
                        >
                          <img
                            src="assets/images/thumbs/flag6.png"
                            alt="Bangladesh"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Bangladesh
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleLanguageChange("South Korea")}
                        >
                          <img
                            src="assets/images/thumbs/flag5.png"
                            alt="South Korea"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          South Korea
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                    {/* Display the selected currency */}
                    <Link
                      to="#"
                      className="selected-text text-heading text-sm py-8"
                    >
                      {selectedCurrency}
                    </Link>
                    <ul className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("USD")}
                        >
                          <img
                            src="assets/images/thumbs/flag1.png"
                            alt="USD"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("Yen")}
                        >
                          <img
                            src="assets/images/thumbs/flag2.png"
                            alt="Yen"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Yen
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("Franc")}
                        >
                          <img
                            src="assets/images/thumbs/flag3.png"
                            alt="Franc"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          Franc
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("EURO")}
                        >
                          <img
                            src="assets/images/thumbs/flag4.png"
                            alt="EURO"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("BDT")}
                        >
                          <img
                            src="assets/images/thumbs/flag6.png"
                            alt="BDT"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          BDT
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                          onClick={() => handleCurrencyChange("WON")}
                        >
                          <img
                            src="assets/images/thumbs/flag5.png"
                            alt="WON"
                            className="w-16 h-12 rounded-4 border border-gray-100"
                          />
                          WON
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* Dropdown Select End */}
              </div>
              <form
                className="flex-align flex-wrap form-location-wrapper"
                ref={searchRef}
              >
                <div className="search-category style-two d-flex h-48 search-form d-sm-flex d-none position-relative">
                  <div className="search-form__wrapper position-relative w-100">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0 w-100"
                      placeholder="Search for printers, ink, toner, papers..."
                      onFocus={() => searchQuery && setShowDropdown(true)}
                    />

                    {/* 🔽 Dropdown results */}
                    {showDropdown && filtered.length > 0 && (
                      <ul
                        className="position-absolute bg-white border border-gray-100 rounded-8 shadow-lg w-100 mt-2"
                        style={{
                          maxHeight: "300px",
                          overflowY: "auto",
                          zIndex: 9999, // 👈 ensures it's on top of everything
                          left: 0,
                          top: "100%", // 👈 place right below input
                        }}
                      >
                        {filtered.map((p) => (
                          <li
                            key={p.id}
                            onClick={() => handleSelectProduct(p.id)}
                            className="d-flex align-items-center gap-3 p-2 hover-bg-main-50"
                            style={{
                              cursor: "pointer",
                              transition: "0.2s",
                            }}
                          >
                            <img
                              src={
                                p.imageUrl ||
                                "/assets/images/thumbs/product-two-img1.png"
                              }
                              alt={p.name}
                              width="40"
                              height="40"
                              className="rounded-4 flex-shrink-0"
                            />
                            <span className="text-gray-800 text-sm fw-medium">
                              {p.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ph ph-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className="header-right flex-align d-lg-block d-none">
              <div className="header-two-activities flex-align flex-wrap gap-32">
                <button
                  type="button"
                  className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                    <i className="ph ph-magnifying-glass" />
                  </span>
                </button>

                <Link
                  to="/cart"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-heart" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                </Link>
                <Link
                  to="/cart"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-shopping-cart-simple" />
                    <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                      2
                    </span>
                  </span>
                </Link>

                <Link
                  to="/login"
                  className="flex-align flex-column gap-8 item-hover-two"
                >
                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                    <i className="ph ph-user-circle" />
                  </span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container container-lg">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="flex-align menu-category-wrapper">
              {/* Menu Start  */}
              <div className="header-menu d-lg-block d-none text-center">
                {/* Nav Menu Start */}
                <ul className="nav-menu flex-align ">
                  <li className="nav-menu__item">
                    <NavLink
                      to="/"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/home-printers"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Home Printers
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/office-printers"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Office Printers
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/inkjet-printers"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Inkjet Printers
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/laser-printers"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Laser Printers
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/toner-papers"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Ink, Toner & Paper
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/about-us"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>

                  <li className="nav-menu__item">
                    <NavLink
                      to="/contact-us"
                      className={(navData) =>
                        navData.isActive
                          ? "nav-menu__link activePage"
                          : "nav-menu__link"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderTwo;
