import React from "react";
import classes from "./ExperienceItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {TimeType} from "../../../../common/types/types";


type PropsType = {
	time: TimeType
	position: string
	company: string
	duties: string
}

export const ExperienceItem = (props: PropsType) => {
	return (
		<div className={classes.experienceItem}>
			<div className={classes.icon}><FontAwesomeIcon icon={faBriefcase}/></div>
			<div className={classes.time}>
				<span>{props.time.workStart}</span>&nbsp;-&nbsp;
				<span>{props.time.workEnd}</span>
			</div>
			<div className={classes.positionBlock}>
				<h5 className={classes.position}>
					{props.position}
				</h5>
				<span className={classes.company}>{props.company}</span>
			</div>
			<div className={classes.duties}>
				<p>
					{props.duties}
				</p>
			</div>
		</div>
	)
}