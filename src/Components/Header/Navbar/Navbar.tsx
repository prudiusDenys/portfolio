import React from "react";
import classes from "./Navbar.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBriefcase, faEnvelopeOpen, faHome, faUser, faUserCog} from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.list}>
				{/*home*/}
				<li className={classes.active}><a href="#"><FontAwesomeIcon className={classes.icon} icon={faHome}/></a></li>
				{/*About Me*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faAddressCard}/></a></li>
				{/*Skills*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faUserCog}/></a></li>
				{/*Portfolio*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faBriefcase}/></a></li>
				{/*Contacts*/}
				<li><a href="#"><FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/></a></li>
			</ul>

		</div>
	)
}