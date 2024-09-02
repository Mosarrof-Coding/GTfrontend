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
import MessageTransport from "./components/Message/MessageTransport";

function App() {
  return (
    <Context>
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog_details/:id" element={<SingleBlog />} />
            <Route path="/testimonials" element={<TestimonialPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/accounts" element={<AccountPage />} />
            <Route path="/signup" element={<SignPage />} />
            <Route path="/helpdesk" element={<MessageTransport />} />
            <Route path="/login" element={<Login />} />
            <Route path="/thankU" element={<ThankU />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Context>
  );
}

export default App;
