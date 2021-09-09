import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import { SocialIcon } from 'react-social-icons'

import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

import './App.scss';


export default function App() {

  return (
    <Router>
      {/* Header Nav */}
      <AppHeader />

      {/* Content */}
      <Container fluid className="verticalFill">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <EasybaseProvider ebconfig={ebconfig}>
            <Projects />
          </EasybaseProvider>
        </Route>
        <Route exact path="/resume">
          <Resume/>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch> 
      </Container>


      {/* Footer Nav */}
      <AppFooter />

    </Router>
  );
}

function AppHeader(){
  return(
    <Navbar collapseOnSelect expand="md" className="bg-secondary mb-3">
    <Container>
      <Navbar.Brand >Benjamin Bazan</Navbar.Brand>

      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-content-between">
        <Nav className="headerNav">
          <LinkContainer exact to="/">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/resume">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/contact" >
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>

        </Nav>
        <Nav className="justify-content-end">
          <SocialIcon url="https://www.linkedin.com/in/benjamin-bazan-08912314a/" bgColor="lightblue"/>
        </Nav>
      </Navbar.Collapse>
    </Container>  
  </Navbar>
  )
}

function AppFooter(){
  return(
    <Navbar className="bg-secondary px-4 pb-4">
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer exact to="/">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/projects">
          <Nav.Link>Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/resume">
          <Nav.Link>Resume</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/contact" >
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>

    </Navbar.Collapse>
    </Navbar>
  )
}