import React from "react";
import classes from "./Skill.module.scss";

type PropsType = {
	skills: Array<string>
}

export const Skill = (props: PropsType) => {


	const skill = props.skills.map((s, i) => {
		return (
			<div key={i} className={classes.skillItem}>
				<span>
					{s}
				</span>
			</div>
		)
	})


	return (
		<div className={classes.skillItems}>
			{skill}
		</div>
	)
}