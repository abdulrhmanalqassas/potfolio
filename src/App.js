import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/home/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Project from "./component/Project/Project";


function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="potfolio/Contact" element={<Contact />} />
        <Route path="potfolio/projects" element={<Project displayedNumber={8} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
