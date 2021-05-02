import Home from "./components/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import AllProjectsDetails from "./components/AllProjectsDetails/AllProjectsDetails/AllProjectsDetails";
import Blogs from "./components/Blogs/Blogs";
import ContactForm from "./components/Home/ContactForm/ContactForm";
import About from "./components/About/About";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";

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
          <AllProjectsDetails />
        </Route>

        <Route path="/project/:id">
          <ProjectDetails />
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
