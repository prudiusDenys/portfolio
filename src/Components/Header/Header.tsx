import React from "react";
import classes from "./Header.module.css";
import {Navbar} from "./Navbar/Navbar";
import styleContainer from '../common/styles/Container.module.css'

export const Header = () => {
	return (
		<div className={classes.header}>
			<div className={styleContainer.container}>
				<div className={classes.headerContent}>
					<Navbar/>
				</div>
			</div>
		</div>
	)
}