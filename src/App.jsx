import "./App.scss";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default App;
