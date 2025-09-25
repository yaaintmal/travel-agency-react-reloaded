// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Destination from "./pages/Destination";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DestLayout from "./components/DestLayout";
import Footer from "./pages/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary title text-center text-4xl font-bold p-4 bg-gradient-to-r from-primary to-secondary">
        Our Awesome Travel Agency
      </h1>{" "}
      <div className="flex justify-center">
        <nav>
          <div className="navbar bg-base-100 shadow-sm">
            <a href="/destinations" className="btn btn-ghost text-xl">
              Destinations
            </a>
            <a href="/about" className="btn btn-ghost text-xl">
              About
            </a>
            <a href="/contact" className="btn btn-ghost text-xl">
              Contact
            </a>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestLayout />}>
          <Route index element={<Destinations />} />
          <Route path=":id" element={<Destination />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
