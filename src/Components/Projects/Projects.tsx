import React from "react";
import classes from "./Projects.module.scss";
import styleContainer from '../../common/styles/container/Container.module.scss'
import {Project} from "./Project/Project";
import {v1} from "uuid";
import {Header} from "../Header/Header";
import {Title} from "../../common/components/Title/Title";
import counter from '../../assets/images/counter.jpg';
import social from '../../assets/images/social.jpg';
import todolist from '../../assets/images/todolist.jpg';


type ProjectsType = {
	id: string
	image: string
	description: string
}

export const Projects = () => {

	const projects: Array<ProjectsType> = [
		{id: v1(), image: social, description: "Social Network"},
		{id: v1(), image: todolist, description: "Todolist"},
		{id: v1(), image: counter, description: "Counter"},
		{id: v1(), image: social, description: "CRM"},
		{id: v1(), image: todolist, description: "Mobile banking"},
		{id: v1(), image: counter, description: "Website for agency"},
	]

	const project = projects.map(p => <Project key={p.id} image={p.image} description={p.description}/>)

	return (
		<div className={classes.projects}>
			<Header/>
			<div className={styleContainer.container}>
				<Title title={'My'} titleSpan={'Portfolio'} titleBg={'works'}/>
				<div className={classes.projectsContent}>
					<div className={classes.projectsBlock}>
						{project}
					</div>
				</div>
			</div>
		</div>
	)
}