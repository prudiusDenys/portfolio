import React from "react";
import classes from "./Navbar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faEnvelopeOpen, faHome, faUser} from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.list}>
				{/*home*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faHome}/></a></li>
				{/*Skills*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faUser}/></a></li>
				{/*Projects*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faBriefcase}/></a></li>
				{/*Contacts*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/></a></li>
			</ul>

		</div>
	)
}