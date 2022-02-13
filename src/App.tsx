import "assets/styles/global.scss";
import Navigation from "components/Navigation";
import LandingPage from "pages/LandingPae";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/services" element={<LandingPage />} />
        <Route path="/education" element={<LandingPage />} />
        <Route path="/experience" element={<LandingPage />} />
        <Route path="/projects" element={<LandingPage />} />
        <Route path="/contact-me" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
