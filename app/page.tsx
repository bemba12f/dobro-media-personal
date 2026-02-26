import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlayBubble from "./components/PlayBubble";
import About from "./components/About";
/*import Services from "./components/Services";*/
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main className="overflow-x-hidden">
  <Navbar />
  <Hero />
  <PlayBubble />
  <About />
  {/*<Services />*/}
  <Portfolio />
  <Contact />
  <Footer />
</main>

  );
}
