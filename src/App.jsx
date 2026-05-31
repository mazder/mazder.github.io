import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "./App.css";

import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProfessionalActivities from "./components/ProfessionalActivities";
import Projects from "./components/Projects";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
        <Route path="publications" element={<Publications />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="activities" element={<ProfessionalActivities />} />
        <Route path="projects" element={<Projects />} /> 
      </Route>
    </Routes>
  );
}

export default App;
