import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MangoCakes from "./components/MangoCakes";
import ProductListing from "./pages/ProductListing";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  console.log('App component rendered');
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mango-cakes" element={<MangoCakes />} />
        <Route path="/cakes" element={<ProductListing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
