import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Educations from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlurBlob from "./components/BlurBlop";

const App = () => {
  return (
    <div className="bg-[#050414] relative min-h-screen overflow-x-hidden">
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />


      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1f_1px,transparent_1px)] bg-[size:50px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none"></div>

      <div className="relative pt-20">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Educations />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
