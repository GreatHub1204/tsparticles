import logo from './logo.svg';
import './App.css';
import Particles from "solid-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { basic } from "tsparticles-demo-configs";

async function particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
}

function App() {
    return (
        <div class="App">
            <header class="App-header">
                <img src={logo} class="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    class="App-link"
                    href="https://github.com/ryansolid/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Solid
                </a>
            </header>
            <Particles id="tsparticles" options={basic} init={particlesInit}/>
        </div>
    );
}

export default App;
