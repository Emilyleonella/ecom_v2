import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Index";
import Notebook from "./pages/Notebook";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/Notebooks" element={<Notebook/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
