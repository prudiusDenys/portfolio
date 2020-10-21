import React from "react";
import classes from "./Header.module.scss";
import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.headerContent}>
				<Navbar/>
			</div>
		</div>
	)
}