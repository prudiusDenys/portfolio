import React from "react";
import classes from "./BurgerNav.module.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faBriefcase, faEnvelopeOpen, faHome} from "@fortawesome/free-solid-svg-icons";

export const BurgerNav = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.list}>
				<li><NavLink exact to="/" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon}  icon={faHome}/><span>Home</span></NavLink></li>
				<li><NavLink to="/about" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon} icon={faAddressCard}/><span>About</span></NavLink></li>
				<li><NavLink to="/projects" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon} icon={faBriefcase}/><span>Projects</span></NavLink></li>
				<li><NavLink to="/contacts" activeClassName={classes.active}><FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/><span>Contacts</span></NavLink></li>
			</ul>
		</div>
	)
}