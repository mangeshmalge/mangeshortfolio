import { useContext } from "react";
import "./app.css"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import MyProjects from "./components/MyProjects/MyProjects";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext, ThemeProvider } from "./context";

function App() {
  const theme=useContext(ThemeContext)
  const darkMode= theme.state.darkMode;
  return (
    <div className="app" style={{backgroundColor:darkMode ? "#222" : "white" , color:darkMode && "white"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <MyProjects/>
        <Contact/>
    </div>
  );
}

export default App;
