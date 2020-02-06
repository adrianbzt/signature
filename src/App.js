import React from 'react';
import './App.css';
import SignatureCanvas from "./components/SignatureCanvas";
import ClearButton from "./components/ClearButton";
import ClockComponent from "./components/ClockComponent"

function App() {
    return (
        <div className="App">
            <header className="App-header">


                <ClearButton value="Clear Me"
                             src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
                             alt="ceva imagine"/>
                <SignatureCanvas/>
                <ClockComponent/>
            </header>
        </div>
    );
}

export default App;
