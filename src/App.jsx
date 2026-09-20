import "./App.css";
import HeroSection from "./component/HeroSection";
import { Features } from "./component/Features";
import { Infrastructure } from "./component/Infrastructure";
import { Tooling } from "./component/Tooling";
import { Footer } from "./component/Footer";

function App() {
  return (
    // Added gap-24 (mobile) and md:gap-40 (desktop) to evenly space all sections
    <main className="min-h-screen flex flex-col gap-24 md:gap-40 overflow-hidden pb-0">
      <HeroSection />
      <Features />
      <Infrastructure />
      <Tooling />
      <Footer />
    </main>
  );
}

export default App;
