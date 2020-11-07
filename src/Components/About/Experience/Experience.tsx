import React from "react";
import classes from "./Experience.module.scss";
import {ExperienceItem} from "./ExperienceItem/ExperienceItem";
import {v1} from "uuid";
import {ExperienceDataType} from "../../../common/types/types";


export const Experience = () => {

	const experienceData: Array<ExperienceDataType> = [
		{
			id: v1(),
			time: {
				workStart: 'January 2020',
				workEnd: ' June 2020'
			},
			position: 'Frontend Developer',
			company: 'Freelance',
			duties: "I developed a social network, a todo list, login, a user's personal account, pagination, a card application. Form validation and sending emails to the client's mail. And other projects. Main technologies: React / Redux, Js, Ts, Material UI, REST API, Storybook, SCSS, CSS Modules, GIT."
		},
	];

	const experienceItem = experienceData.map(i => <ExperienceItem key={i.id} time={i.time} position={i.position}
																																 company={i.company} duties={i.duties}/>)

	return (
		<div className={classes.experience}>
			<div className={classes.experienceContent}>
				{experienceItem}
			</div>
		</div>
	)
}