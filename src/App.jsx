import "./App.scss";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import Software from "./pages/SoftwareDev/Software";
import Freelance from "./pages/FreelanceServices/Freelance";
import Writing from "./pages/Writing/Writing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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
