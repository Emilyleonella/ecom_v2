import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Index";
import Footer from "./components/Footer";
import Contactpage from "./pages/Contactpage";
import Notebooks from "./pages/Notebooks"

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/Notebooks" element={<Notebooks/>}></Route>
          <Route path="/Contact" element={<Contactpage/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
