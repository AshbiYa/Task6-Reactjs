import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Books from "./routes/Books";
import Service from "./routes/Service";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Navbar />
    </div>
  );
}
