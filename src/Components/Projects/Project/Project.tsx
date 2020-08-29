import React from "react";
import classes from "./Project.module.css";


type PropsType = {
	image: string
	title: string
	description: string
}

export const Project = (props: PropsType) => {
	return (
		<div className={classes.project}>
			<div className={classes.projectContent}>

				<div className={classes.projectImageBlock}>
					<div className={classes.image}>
						<a href="#"><img src={props.image} alt=""/></a>
						<div className={classes.showProject}>
							<h3><a href="#">Show project</a></h3>
						</div>
					</div>
				</div>

				<div className={classes.projectDescriptionBlock}>
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