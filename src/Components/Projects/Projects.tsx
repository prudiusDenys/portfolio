import React from "react";
import classes from "./Projects.module.css";
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {v1} from "uuid";


type ProjectsType = {
	id: string
	image: string
	title: string
	description: string
}

export const Projects = () => {

	const projects: Array<ProjectsType> = [
		{
			id: v1(),
			image: 'https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png',
			title: 'React',
			description: "My React work"
		},
		{
			id: v1(),
			image: 'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w',
			title: 'JS',
			description: "My JS work"
		},
		{
			id: v1(),
			image: 'https://www.webinfinity.it/wp-content/uploads/2014/05/CSS.jpg',
			title: 'CSS',
			description: "My CSS work"
		},
	]

	const project = projects.map(p => <Project key={p.id} image={p.image} title={p.title} description={p.description}/>)

	return (
		<div className={classes.projects}>
			<div className={styleContainer.container}>
				<div className={classes.projectsContent}>
					<div className={classes.title}>
						<h2>My projects</h2>
					</div>
					<div className={classes.projectsBlock}>
						{project}
					</div>
				</div>
			</div>
		</div>
	)
}