import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Router from "./components/Router";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Clients />
      <Router />
      <Pricing />
      <Login />
      <Signup />
    </>
  );
}

export default App;
