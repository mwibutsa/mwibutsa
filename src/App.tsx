import "assets/styles/global.scss";
import Navigation from "components/Navigation";
import LandingPage from "pages/LandingPae";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navigation />
      <LandingPage />
    </Router>
  );
}

export default App;
