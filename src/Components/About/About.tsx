import React from "react";
import classes from "./About.module.scss";
import styleContainer from '../../common/styles/container/Container.module.scss'
import {Title} from "../../common/components/Title/Title";
import {Separator} from "../../common/components/Separator/Separator";
import {CustomTitle} from "../../common/components/CustomTitle/CustomTitle";
import {Skills} from "./Skills/Skills";
import {Header} from "../Header/Header";
import {Experience} from "./Experience/Experience";
import {PersonalInfoBox} from "./PersonalInfoBox/PersonalInfoBox";
import { BurgerMenu } from "../Header/BurgerMenu/BurgerMenu";



export const About = () => {
	return (
		<div className={classes.about}>
			<BurgerMenu/>
			<Header/>
			<Title title={'ABOUT'} titleSpan={'ME'} titleBg={'RESUME'}/>
			<div className={styleContainer.container}>
				<div className={classes.aboutContent}>
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