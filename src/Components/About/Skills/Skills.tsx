import React from "react";
import classes from "./Skills.module.scss";
import {Skill} from "./Skill/Skill";

export const Skills = () => {

	const skills: Array<string> = ['React', 'Redux', 'JS', 'TS', 'HTML5', 'CSS', 'SASS', 'API']

	return (
		<div className={classes.skills}>
			<Skill skills={skills}/>
		</div>
	)
}