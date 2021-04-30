import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import BaseLayout from "./components/BaseLayout";
import particlesOptions from "./particles.json";

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <BaseLayout />
            {/* <header className="App-header">
            </header> */}
        </div>
    );
}

export default App;
