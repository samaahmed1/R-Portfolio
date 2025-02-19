import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
