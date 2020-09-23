import React from "react";
import classes from "./Button.module.scss";

type PropsType = {
	title: string
	path: string
}

export const Button = (props: PropsType) => {
	return(
		<div>
			<div className={classes.btn}>
				<a href={props.path}>{props.title}</a>
			</div>
		</div>
	)
}