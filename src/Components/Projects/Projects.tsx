import React from "react";
import classes from "./Projects.module.scss";
import styleContainer from '../../common/styles/container/Container.module.scss'
import {Project} from "./Project/Project";
import {v1} from "uuid";
import {Title} from "../../common/components/Title/Title";
import counter from '../../assets/images/counter.jpg';
import social from '../../assets/images/social.jpg';
import todolist from '../../assets/images/todolist.jpg';
import cards from '../../assets/images/cards.jpg';


type ProjectsType = {
	id: string
	image: string
	description: string
	projectLink: string
}

export const Projects = () => {

	const projects: Array<ProjectsType> = [
		{id: v1(), image: social, description: "Social Network", projectLink: 'https://prudiusdenys.github.io/my-social-network-ts/#/profile'},
		{id: v1(), image: todolist, description: "Todolist", projectLink: ''},
		{id: v1(), image: cards, description: "Cards", projectLink: ''},
		{id: v1(), image: counter, description: "Personal Account", projectLink: ''},
	]

	const project = projects.map(p => <Project key={p.id} image={p.image} description={p.description} projectLink={p.projectLink} />)

	return (
		<div className={classes.projects}>
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