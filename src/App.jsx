import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients";
import Router from "./components/Router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Clients />
      <Router />
      <Login />
      <Signup />
    </>
  );
}

export default App;
