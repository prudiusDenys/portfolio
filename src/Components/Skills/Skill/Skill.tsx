import React from "react";
import classes from "./Skill.module.css";


type PropsType = {
	icon: string
	title: string
	description: string
}

export const Skill = (props: PropsType) => {
	return (
		<div className={classes.skill}>
			<div className={classes.skillContent}>
				<div className={classes.icon}>
					{props.icon}
				</div>
				<div className={classes.skillBlock}>
					<div className={classes.title}>
						<h3>{props.title}</h3>
					</div>
					<div className={classes.description}>
						{props.description}
					</div>
				</div>
			</div>
		</div>
	)
}