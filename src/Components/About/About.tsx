import React from "react";
import classes from "./About.module.scss";
import styleContainer from '../../common/styles/container/Container.module.scss'
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/Title/Title";
import {Separator} from "../../common/components/Separator/Separator";
import {CustomTitle} from "../../common/components/CustomTitle/CustomTitle";
import {Skills} from "./Skills/Skills";
import {Header} from "../Header/Header";
import {Experience} from "./Experience/Experience";


export const About = () => {
	return (
		<div className={classes.about}>
			<Header/>
			<Title title={'ABOUT'} titleSpan={'ME'} titleBg={'RESUME'}/>
			<div className={styleContainer.container}>
				<div className={classes.aboutContent}>

					<div className={classes.personalWrapper}>

						<div className={classes.personalBox}>
							<div className={classes.personalInfo}>
								<h3>PERSONAL INFOS</h3>
							</div>
							<div className={classes.profileRow}>
								<div className={classes.profileColumn}>
									<ul>
										<li><span className={classes.spanTitle}>First name : </span><span
											className={classes.spanValue}>Denis</span></li>
										<li><span className={classes.spanTitle}>Last name : </span><span
											className={classes.spanValue}>Prudius</span></li>
										<li><span className={classes.spanTitle}>Age : </span><span
											className={classes.spanValue}>27 Years</span></li>
										<li><span className={classes.spanTitle}>Nationality : </span><span
											className={classes.spanValue}>Russian</span></li>
										<li><span className={classes.spanTitle}>Freelance : </span><span
											className={classes.spanValue}>Available</span></li>
									</ul>
								</div>
								<div className={classes.profileColumn}>
									<ul>
										<li><span className={classes.spanTitle}>Address : </span><span
											className={classes.spanValue}>Moscow</span></li>
										<li><span className={classes.spanTitle}>phone : </span><span className={classes.spanValue}><a
											href="tel:3518441020">+393518441020</a></span></li>
										<li><span className={classes.spanTitle}>Email : </span><span
											className={classes.spanValue}>prdslife@gmail.com</span></li>
										<li><span className={classes.spanTitle}>Skype: </span><span
											className={classes.spanValue}>denis_prds</span></li>
										<li><span className={classes.spanTitle}>Languages : </span><span className={classes.spanValue}> Russian, English, German</span>
										</li>
									</ul>
								</div>
								<Button title={'DOWNLOAD CV'}/>
							</div>
						</div>

						<div className={classes.boxStartsRow}>
							<div className={classes.boxStartsColumn}>
								<div className={classes.boxStartsItem}>
									<h3>6</h3>
									<p>month of <span className={classes.itemSpan}>experience</span></p>
								</div>
							</div>
							<div className={classes.boxStartsColumn}>
								<div className={classes.boxStartsItem}>
									<h3>4</h3>
									<p>completed <span className={classes.itemSpan}>projects</span></p>
								</div>
							</div>
							<div className={classes.boxStartsColumn}>
								<div className={classes.boxStartsItem}>
									<h3>10</h3>
									<p>happy <span className={classes.itemSpan}>customers</span></p>
								</div>
							</div>
							<div className={classes.boxStartsColumn}>
								<div className={classes.boxStartsItem}>
									<h3>0</h3>
									<p>awards <span className={classes.itemSpan}>won</span></p>
								</div>
							</div>
						</div>
					</div>
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