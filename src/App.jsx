import { Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Notfound from "./pages/Notfound";
import BlogPage from "./pages/BlogPage";
import SingleBlog from "./components/Blog/SingleBlog";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import Checkout from "./pages/Checkout";
import ThankU from "./pages/ThankU";
import TestimonialPage from "./pages/TestimonialPage";
import AccountPage from "./pages/AccountPage";
import Login from "./pages/Login";
import SignPage from "./pages/SignPage";
import Shope from "./components/gallery/Shope";
import Product_details from "./components/gallery/Product_details";
import Teams from "./components/Teams/Teams";
import Training from "./components/trainongs/Training";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Terms_Conditions from "./components/Terms&Conditions/Terms_Conditions";
import Privachy from "./components/Terms&Conditions/Privachy";
// import Livechate from "./components/Message/Livechate";

function App() {
  return (
    <Context>
      <main className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-grow pt-10 md:pt-12 lg:pt-[62px] gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/service" element={<ServicePage />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog_details/:id" element={<SingleBlog />} />

            <Route path="/shop" element={<Shope />} />
            <Route path="/shop/products/:id" element={<Product_details />} />

            <Route path="/testimonials" element={<TestimonialPage />} />

            <Route path="/golf_teams" element={<Teams />} />
            <Route path="/training-schedule" element={<Training />} />

            <Route path="/shopingCart/:id" element={<ShoppingCart />} />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="/Terms_conditions" element={<Terms_Conditions />} />
            <Route path="/Privacy_Policy" element={<Privachy />} />

            <Route path="/accounts" element={<AccountPage />} />
            <Route path="/signup" element={<SignPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/thankU" element={<ThankU />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </div>
        {/* <Livechate /> */}
        <Footer />
      </main>
    </Context>
  );
}

export default App;
