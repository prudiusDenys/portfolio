import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {MainBlock} from "./Components/MainBlock/MainBlock";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Form} from "./Components/Form/Form";
import {Footer} from "./Components/Footer/Footer";

const App = () => {
	return (
		<div className="App">
			<Header/>
			<MainBlock/>
			<Skills/>
			<Projects/>
			<Form/>
			<Footer/>
		</div>
	);
}

export default App;
