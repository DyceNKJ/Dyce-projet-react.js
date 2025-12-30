import { CssVarsProvider } from "@mui/joy/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projet from "./components/Projet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <CssVarsProvider>
      <Navbar />
    </CssVarsProvider>
      <Home />
      <About />
      <Experience />
      <Projet />
      <Contact />
      <Footer />
    </div>
  )
}
