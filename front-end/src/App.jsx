import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Gallery from "./components/pages/gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </>
  );
}

export default App;
