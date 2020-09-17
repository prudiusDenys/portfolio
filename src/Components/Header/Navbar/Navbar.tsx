import React from "react";
import classes from "./Navbar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBriefcase, faEnvelopeOpen, faHome, faUserCog} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.list}>
				{/*home*/}
				<li className={classes.active}><NavLink to="/"><FontAwesomeIcon className={classes.icon} icon={faHome}/></NavLink></li>
				{/*About Me*/}
				<li><NavLink to="/about"><FontAwesomeIcon className={classes.icon} icon={faAddressCard}/></NavLink></li>
				{/*Skills*/}
				<li><NavLink to="/skills"><FontAwesomeIcon className={classes.icon} icon={faUserCog}/></NavLink></li>
				{/*Projects*/}
				<li><NavLink to="/projects"><FontAwesomeIcon className={classes.icon} icon={faBriefcase}/></NavLink></li>
				{/*Contacts*/}
				<li><NavLink to="/contacts"><FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/></NavLink></li>
			</ul>
		</div>
	)
}