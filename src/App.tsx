import "assets/styles/global.scss";
import Navigation from "components/Navigation";
import LandingPage from "pages/LandingPae";

function App() {
  return (
    <div className="mwibutsaApp">
      <Navigation />
      <LandingPage />
    </div>
  );
}

export default App;
