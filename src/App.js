import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import Portfolio from "./pages/Portfolio.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import particlesOptions from "./particles.json";
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import NoMatch from "./pages/NoMatch.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Particles options={particlesOptions} />
                <Header />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/Portfolio" component={Portfolio} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
