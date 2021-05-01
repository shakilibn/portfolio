import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import Projects from "./components/Projects/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import ContactForm from "./components/ContactForm/ContactForm";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Menubar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/blogs">
          <Blogs />
        </Route>

        <Route path="/contact">
          <ContactForm />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
