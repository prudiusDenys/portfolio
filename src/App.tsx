import React from 'react';
import './App.css';
import {Home} from "./Components/Home/Home";
import {Projects} from "./Components/Projects/Projects";
import {Form} from "./Components/Form/Form";
import {Footer} from "./Components/Footer/Footer";
import {HashRouter as Router, Route,} from "react-router-dom";
import {About} from "./Components/About/About";
import {Header} from "./Components/Header/Header";

const App = () => {
	return (
		<Router>
		<div className="App">
			<Route exact path={'/'}  render={()=> <Home/>} />
			<Route  path={'/about'}  render={()=> <About/>} />
			<Route path={'/skills'}  render={()=> <Projects/>} />
			{/*<Route path={'/contacts'}  render={()=> <Contacts/>} />*/}
			{/*<Form/>*/}
			{/*<Footer/>*/}
		</div>
		</Router>
	);
}

export default App;
