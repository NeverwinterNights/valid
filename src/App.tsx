import React from 'react';
import './App.css';
import {Main} from "./components/main/Main";
import { Info } from './components/info/Info';
import RoutesComponent from "./RoutesComponent";


function App() {
    return (
        <div className="App">
            {/*<Main/>*/}
            {/*<RoutesComponent/>*/}
            <Info/>
        </div>
    );
}

export default App;
