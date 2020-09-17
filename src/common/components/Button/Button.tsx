import React from "react";
import classes from "./Button.module.scss";

type PropsType = {
	title: string
}

export const Button = (props: PropsType) => {
	return(
		<div>
			<div className={classes.btn}>
				<a href="#">{props.title}</a>
			</div>
		</div>
	)
}