import React from "react";
import classes from "./Skills.module.css";
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


type SkillsType = {
	id: number
	icon: string
	title: string
	description: string
}

export const Skills = () => {

	const skills: Array<SkillsType> = [
		{
			id: 1,
			icon: 'ReactIcon',
			title: 'React',
			description: '\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut culpa deleniti deserunt facere harum iure.\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut culpa deleniti deserunt facere harum iure.'
		},
		{
			id: 2,
			icon: 'JSIcon',
			title: 'JS',
			description: '\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut culpa deleniti deserunt facere harum iure.'
		},
		{
			id: 3,
			icon: 'CSSIcon',
			title: 'CSS',
			description: '\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut culpa deleniti deserunt facere harum iure.'
		},
	]

	let skill = skills.map(s => <Skill key={s.id} icon={s.icon} title={s.title} description={s.description}/>)

	return (
		<div className={classes.skills}>
			<div className={styleContainer.container}>
				<div className={classes.skillsContent}>
					<div className={classes.title}>
						<h2>Skills</h2>
					</div>
					<div className={classes.skillsBlock}>
						{skill}
					</div>
				</div>
			</div>
		</div>
	)
}