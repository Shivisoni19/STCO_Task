import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About'
import DataInfo from './screens/DataInfo'
import Contact from './screens/Contact'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

function App() { 
  return (
    <div>
      <Router>
        <Navbar />
        <div
          className="fluid-container"
        >
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/show/:id" element={<DataInfo />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;