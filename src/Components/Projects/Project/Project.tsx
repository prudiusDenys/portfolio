import React from "react";
import classes from "./Project.module.scss";


type PropsType = {
	image: string
	description: string
}

export const Project = (props: PropsType) => {
	return (
		<div className={classes.project}>
			<div className={classes.image}>
				<a href="#"><img src={props.image} alt=""/></a>
				<div className={classes.showProject}>
					<a href="#">Show project</a>
				</div>
			</div>
			<div className={classes.description}>
				<h3>	{props.description}</h3>
			</div>
		</div>
	)
}