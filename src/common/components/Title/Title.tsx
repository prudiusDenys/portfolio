import React from "react";
import classes from "./Title.module.scss";

type PropsType = {
	title: string
	titleSpan: string
	titleBg: string
}

export const Title = (props: PropsType) => {
	return (
		<div>
			<div className={classes.title}>
				<h1>{props.title} <span>{props.titleSpan}</span></h1>
				<span className={classes.titleBg}>{props.titleBg}</span>
			</div>
		</div>
	)
}