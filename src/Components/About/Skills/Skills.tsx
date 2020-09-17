import React from "react";
import classes from "./Skills.module.scss";
import styleContainer from '../../../common/styles/container/Container.module.scss'
import {Skill} from "./Skill/Skill";

export const Skills = () => {

	const skills:Array<string> = ['React', 'Redux','JS', 'TS', 'HTML5', 'CSS', 'SASS', 'API']


	return (
		<div className={classes.skills}>
			<div className={styleContainer.container}>
				<div className={classes.skillsContent}>
						<Skill skills={skills}/>
				</div>
			</div>
		</div>
	)
}