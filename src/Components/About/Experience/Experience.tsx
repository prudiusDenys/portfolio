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
			duties: 'I was mainly engaged in adaptive layout of sites using preprocessors and BEM methodology. I developed my own components using React (including hooks) / Redux, TypeScript, and also used Jest tests, Storybook, Snapshot Testing to test components.'
		},
		{
			id: v1(),
			time: {
				workStart: 'January 2020',
				workEnd: ' June 2020'
			},
			position: 'Frontend Developer',
			company: 'Freelance',
			duties: 'I was mainly engaged in adaptive layout of sites using preprocessors and BEM methodology. I developed my own components using React (including hooks) / Redux, TypeScript, and also used Jest tests, Storybook, Snapshot Testing to test components.'
		},
		{
			id: v1(),
			time: {
				workStart: 'January 2020',
				workEnd: ' June 2020'
			},
			position: 'Frontend Developer',
			company: 'Freelance',
			duties: 'I was mainly engaged in adaptive layout of sites using preprocessors and BEM methodology. I developed my own components using React (including hooks) / Redux, TypeScript, and also used Jest tests, Storybook, Snapshot Testing to test components.'
		},
	];

	const experienceItem = experienceData.map(i => <ExperienceItem key={i.id} time={i.time} position={i.position} company={i.company} duties={i.duties}/>)

	return (
		<div className={classes.experience}>
				<div className={classes.experienceContent}>
						{experienceItem}
				</div>
		</div>
	)
}