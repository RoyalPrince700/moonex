import React from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import WhyMoonex from "../sections/WhyMoonex";
import OurFeatures from "../sections/OurFeatures";
import FAQs from "../sections/FAQs";
import Footer from "../sections/Footer";
import './index.css'; // Import Tailwind CSS






// Define a type for the props (if needed, otherwise you can skip this)
interface AppProps {
  title?: string;
}

// Main App Component
const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <WhyMoonex/>
     <OurFeatures/>
     <FAQs/>
     <Footer/>
    </div>
  );
};

export default App;
