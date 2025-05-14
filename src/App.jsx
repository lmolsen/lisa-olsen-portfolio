import "./App.scss";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import Software from "./pages/SoftwareDev/Software";
import Freelance from "./pages/FreelanceServices/Freelance";
import Writing from "./pages/Writing/Writing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// preload images
import heron from "./assets/images/heron.png";
import quiet from "./assets/images/quiet.png";
import antifa from "./assets/images/antifa.png";
import io from "./assets/images/io.png";
import pithy from "./assets/images/pithy.png";
import emergence from "./assets/images/emergence.png";

function App() {
    useEffect(() => {
      const images = [heron, quiet, antifa, io, pithy, emergence];

      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/software-dev" element={<Software />} />
        <Route path="/freelance-services" element={<Freelance />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
