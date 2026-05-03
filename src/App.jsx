import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MangoCakes from "./components/MangoCakes";
import ProductListing from "./pages/ProductListing";
import Cakes from "./pages/Cakes";
import ThemeCakes from "./pages/ThemeCakes";
import ByRelationship from "./pages/ByRelationship";
import Desserts from "./pages/Desserts";
import Birthday from "./pages/Birthday";
import Hampers from "./pages/Hampers";
import Anniversary from "./pages/Anniversary";
import Occasions from "./pages/Occasions";
import CustomizedCakes from "./pages/CustomizedCakes";
import Classic from "./pages/Classic";
import Gourmet from "./pages/Gourmet";
import PhotoCakes from "./pages/PhotoCakes";
import Designer from "./pages/Designer";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  console.log('App component rendered');
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mango-cakes" element={<MangoCakes />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/theme-cakes" element={<ThemeCakes />} />
        <Route path="/by-relationship" element={<ByRelationship />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/hampers" element={<Hampers />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/customized-cakes" element={<CustomizedCakes />} />
        <Route path="/classic-cakes" element={<Classic />} />
        <Route path="/gourmet-cakes" element={<Gourmet />} />
        <Route path="/photo-cakes" element={<PhotoCakes />} />
        <Route path="/designer-cakes" element={<Designer />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
