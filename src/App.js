import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="h-screen bg-[#0a0908]">
      <HashRouter>
        <Navbar />
        <Routes basename="/Bites">
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="cartpage" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
