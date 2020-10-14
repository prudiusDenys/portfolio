import React from "react";
import classes from "./Navbar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBriefcase, faEnvelopeOpen, faHome} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.list}>
				{/*home*/}
				<li><NavLink exact to="/" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon}  icon={faHome}/><h2 className={classes.linkItem}>Home</h2></NavLink></li>
				{/*About Me*/}
				<li><NavLink to="/about" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon} icon={faAddressCard}/><h2 className={classes.linkItem}>About</h2></NavLink></li>
				{/*Projects*/}
				<li><NavLink to="/projects" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon} icon={faBriefcase}/><h2 className={classes.linkItem}>Projects</h2></NavLink></li>
				{/*Contacts*/}
				<li><NavLink to="/contacts" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/><h2 className={classes.linkItem}>Contacts</h2></NavLink></li>
			</ul>
		</div>
	)
}