import React from "react";
import classes from "./CustomTitle.module.scss";

type PropsType = {
	customTitle: string
}

export const CustomTitle = (props: PropsType) => {
	return(
		<div>
			<div className={classes.customTitle}>
				<h3>{props.customTitle}</h3>
			</div>
		</div>
	)
}