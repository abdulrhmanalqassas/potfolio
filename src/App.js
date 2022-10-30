import "./App.css";
import { Routes , Route} from 'react-router-dom';
import Nav from "./componant/Nav";
import Home from "./componant/home/Home";
import Footer from "./componant/Footer";
import Contact from "./componant/Contact";


function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
      <Route path="/" element={  <Home />} />
      <Route path="/Contact" element={<Contact />} />
     </Routes>
     
      
      <Footer />
    </div>
  );
}

export default App;
