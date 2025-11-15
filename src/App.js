import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import HomePageTwo from "./pages/HomePageTwo";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import HomePrinters from "./pages/HomePrinters";
import InkjetPrinters from "./pages/InkjetPrinters";
import OfficePrinters from "./pages/OfficePrinters";
import LaserPrinters from "./pages/LaserPrinters";
import InkToner from "./pages/InkToner";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route exact path="/one" element={<HomePageOne />} />
        <Route exact path="/" element={<HomePageTwo />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/home-printers" element={<HomePrinters />} />
        <Route exact path="/inkjet-printers" element={<InkjetPrinters />} />
        <Route exact path="/office-printers" element={<OfficePrinters />} />
        <Route exact path="/laser-printers" element={<LaserPrinters />} />
        <Route exact path="/toner-papers" element={<InkToner />} />

        <Route
          exact
          path="/product-details"
          element={<ProductDetailsPageOne />}
        />
        <Route exact path="/product/:id" element={<ProductDetailsPageTwo />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
