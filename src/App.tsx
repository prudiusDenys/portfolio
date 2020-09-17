import React from 'react';
import './App.css';
import {MainBlock} from "./Components/MainBlock/MainBlock";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Form} from "./Components/Form/Form";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {About} from "./Components/About/About";

const App = () => {
	return (
		<Router>
		<div className="App">
			<Route exact path={'/home'}  render={()=> <MainBlock/>} />
			<Route path={'/about'}  render={()=> <About/>} />
			{/*<Route path={'/skills'}  render={()=> <Skills/>} />*/}
			{/*<Route path={'/projects'}  render={()=> <Projects/>} />*/}
			{/*<Route path={'/contacts'}  render={()=> <Contacts/>} />*/}
			{/*<Form/>*/}
			{/*<Footer/>*/}
		</div>
		</Router>
	);
}

export default App;
