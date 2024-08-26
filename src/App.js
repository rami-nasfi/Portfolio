import logo from "./logo.svg";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import components
import Nav from "./components/Nav";
import HomeSection from "./components/HomeSection";
import SkillsSection from "./components/SkillsSection";
import ProficiencySection from "./components/ProficiencySection";
import AchievementsSection from "./components/AchievementsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";

//import style
import "./assets/fonts/agustina-webfont/style.css";
import "./styles/style.css";
import Footer from "./components/Footer";
import ExperiencesSection from "./components/ExperiencesSection";

function App() {
  return (
    <div>
      <Nav />
      <div className="section">
        <HomeSection />
        <SkillsSection />
        <ExperiencesSection />
        <ProficiencySection />
        <EducationSection />
        <AchievementsSection />
        <OpenSourceSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
