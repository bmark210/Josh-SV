import Navbar from "../components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import Blog from "../components/blog/blog";
import Works from "../components/works/works";
import About from "../components/about/about";
function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
