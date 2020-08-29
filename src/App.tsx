import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {MainBlock} from "./Components/MainBlock/MainBlock";
import {Skills} from "./Components/Skills/Skills";

const App = () => {
	return (
		<div className="App">
			<Header/>
			<MainBlock/>
			<Skills/>
		</div>
	);
}

export default App;
