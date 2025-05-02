import { BrowserRouter,Route,Routes} from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Layout from "./Components/Layout"; 
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
const MainApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skill" element={<Skill/>}/>
          <Route path="contact" element={<Contact/>}/>
            
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;
