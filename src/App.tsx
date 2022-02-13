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
      </Routes>
    </Router>
  );
}

export default App;
