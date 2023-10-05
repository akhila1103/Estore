import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Latest from "./pages/Latest";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProductDetail from "./components/ProductDetail";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/category/:id" element={<ProductDetail/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
};

export default App;
