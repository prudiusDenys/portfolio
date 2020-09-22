import React from "react";
import classes from "./StatsItem.module.scss";

type PropsType = {
	number: number
	text: string
	textSpan: string
}

export const StatsItem = (props: PropsType) => {
	return (
		<div className={classes.boxStartsColumn}>
			<div className={classes.boxStartsItem}>
				<h3>{props.number}</h3>
				<p>{props.text} <span className={classes.itemSpan}>{props.textSpan}</span></p>
			</div>
		</div>
	)
}