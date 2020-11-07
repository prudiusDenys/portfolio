import React from "react";
import classes from "./Skills.module.scss";
import {Skill} from "./Skill/Skill";

export const Skills = () => {

	const skills: Array<string> = ['React', 'Redux', 'Redux-toolkit', 'JS6+', 'TS', 'Tests', 'Storybook', 'Snapshot Testing', 'REST API', 'Axios', 'GIT', 'Material UI', 'NPM/Yarn', 'Heroku', 'GULP', 'HTML5 CSS3', 'SCSS', 'CSS Modules', 'BEM', 'FLEX']

	return (
		<div className={classes.skills}>
			<Skill skills={skills}/>
		</div>
	)
}