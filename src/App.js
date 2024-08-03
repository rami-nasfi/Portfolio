import logo from "./logo.svg";
//import style
import "./assets/fonts/agustina-webfont/style.css";
import "./styles/style.css";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import components
import Nav from "./components/Nav";
import HomeSection from "./components/HomeSection";

function App() {
  return (
    <div>
      <Nav />
      <HomeSection />
    </div>
  );
}

export default App;
