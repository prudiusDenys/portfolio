import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<ul className={classes.list}>
				<li><a href="#">Home</a></li>
				<li><a href="#">Skills</a></li>
				<li><a href="#">Projects</a></li>
				<li><a href="#">Contacts</a></li>
			</ul>
		</div>
	)
}