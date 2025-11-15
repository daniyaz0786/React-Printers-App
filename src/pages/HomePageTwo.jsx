import React from "react";
import HeaderTwo from "../components/HeaderTwo";
import BannerTwo from "../components/BannerTwo";
import PromotionalTwo from "../components/PromotionalTwo";
import DealsOne from "../components/DealsOne";
import DiscountOne from "../components/DiscountOne";
import RecentlyViewedOne from "../components/RecentlyViewedOne";
import ShippingTwo from "../components/ShippingTwo";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import PremuimInk from "../components/PremuimInk";
import Choose from "../components/Choose";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";

const HomePageTwo = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#2562eb" />

      {/* HeaderTwo */}
      <HeaderTwo category={false} />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PromotionalTwo */}
      <PromotionalTwo />

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* DealsOne */}
      <DealsOne />

      {/* FeaturedProducts */}
      <FeaturedProducts />

      {/* PremuimInk */}
      <PremuimInk />

      {/* Choose */}
      <Choose />

      {/* Faq */}
      <Faq />

      {/* DiscountOne */}
      <DiscountOne />

      {/* Testimonial */}
      <Testimonial />

      {/* RecentlyViewedOne */}
      <RecentlyViewedOne />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default HomePageTwo;
