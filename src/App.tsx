import React from 'react';
import './App.css';
import {Home} from "./Components/Home/Home";
import {Projects} from "./Components/Projects/Projects";
import {HashRouter as Router, Route,} from "react-router-dom";
import {About} from "./Components/About/About";
import {Contacts} from "./Components/Contacts/Contacts";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Route exact path={'/'} render={() => <Home/>}/>
				<Route path={'/about'} render={() => <About/>}/>
				<Route path={'/projects'} render={() => <Projects/>}/>
				<Route path={'/contacts'} render={() => <Contacts/>}/>
			</div>
		</Router>
	);
}

export default App;
