import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Router from "./components/Router";
import Login from "./pages/Login";
import Adv from "./components/Adv";
import Promo from "./components/Promo";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Fiber from "./components/Fiber";
import Feature from "./components/Feature";
import Support from "./components/Support";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Clients />
      <Router />
      <Login />
      <Adv />
      <Promo />
      <Services />
      <Experience />
      <Fiber />
      <Feature />
      <Support />
      <Contactus />
      <Footer />
      <Signup />
    </>
  );
}

export default App;