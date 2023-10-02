import { Box } from "@mui/material"
import About from "./components/About"
import Artwork from "./components/Artwork"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Main } from "./components/main"
import { Navbar } from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Tech from "./components/Tech"
import Timeline from "./components/Timeline.jsx"
import PhoneTech from "./components/PhoneTech"
import PhoneProject from "./components/PhoneProject"
import Phoneart from "./components/Phoneart"
import img1 from './assets/img/art/1.png'
import img2 from "./assets/img/art/2.png"
import img3 from "./assets/img/art/3.png"
import img4 from "./assets/img/art/4.png"
import img5 from "./assets/img/art/5.png"
import img6 from "./assets/img/art/6.png"


function App() {
  const slides = [
    { url: img1},
    { url: img2},
    { url: img3},
    { url: img4},
    { url: img5},
    { url: img6}
  ];
  const containerStyles = {
    width: "80%",
    height: "280px",
    margin: "20px 11%",
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Main />
      <About />
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Skills />
        <Tech />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <PhoneTech />
      </Box>
      <Timeline />
      <Box sx={{ display: { xs: "none", sm: "Block" } }}>
        <Project />
        <Artwork />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <PhoneProject />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <div style={containerStyles}>
        <Phoneart slides={slides} />
      </div>
      </Box>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
