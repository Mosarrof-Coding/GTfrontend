import { Routes, Route } from "react-router-dom";

import "./App.css";
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

function App() {
  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog_details/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankU" element={<ThankU />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App;
