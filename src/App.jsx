import { useState } from "react";
import "./App.css";
import HeroSection from "./component/hero";
import { Features } from "./component/Features";
import { Infrastructure } from "./component/Infrastructure";
import { Tooling } from "./component/Tooling";
import { Footer } from "./component/Footer";

function App() {
  return (
    <main className="min-h-screen flex flex-col ">
      <HeroSection />
      <Features />
      <Infrastructure />
      <Tooling />
      <Footer />
    </main>
  );
}

export default App;
