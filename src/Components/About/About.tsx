import React from "react";
import classes from "./About.module.scss";
import styleContainer from '../../common/styles/container/Container.module.scss'
import {Title} from "../../common/components/Title/Title";
import {Separator} from "../../common/components/Separator/Separator";
import {CustomTitle} from "../../common/components/CustomTitle/CustomTitle";
import {Skills} from "./Skills/Skills";
import {Experience} from "./Experience/Experience";
import {PersonalInfoBox} from "./PersonalInfoBox/PersonalInfoBox";


export const About = () => {
	return (
		<div className={classes.about}>
			<div className={styleContainer.container}>
				<div className={classes.aboutContent}>
					<Title title={'ABOUT'} titleSpan={'ME'} titleBg={'RESUME'}/>
					<PersonalInfoBox/>
					<Separator/>
					<CustomTitle customTitle={'My Skills'}/>
					<Skills/>
					<Separator/>
					<CustomTitle customTitle={'EXPERIENCE'}/>
					<Experience/>
				</div>
			</div>
		</div>
	)
}