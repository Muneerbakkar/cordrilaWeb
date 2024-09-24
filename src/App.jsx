import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import Apk from "./pages/Apk";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="careers" element={<Careers />} />
          <Route path="apk" element={<Apk/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
