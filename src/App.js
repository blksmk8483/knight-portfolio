import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDisplay />} />
          <Route path="experience" element={<Experience />} />
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
