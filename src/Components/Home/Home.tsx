import React from "react";
import classes from "./Home.module.scss";
import myPhoto from '../../assets/images/myPhoto.jpg'
import {Header} from "../Header/Header";
import {Button} from "../../common/components/Button/Button";

const myPhotoStyles = {
	backgroundImage: `url(${myPhoto})`
}

export const Home = () => {
	return (
		<div className={classes.mainBlock}>
			<div className={classes.mainBlockContent}>
				<div className={classes.colorBlock}></div>
				<div className={classes.welcomeBlock}>

					<div className={classes.photo} style={myPhotoStyles}></div>
					<div className={classes.aboutMe}>
						<div className={classes.greeting}>
							<h6>Hi There !</h6>
						</div>
						<div className={classes.me}>
							<h1>I am <span>Denis Prudius</span></h1>
						</div>
						<div>
							<div className={classes.aboutMeInfo}>
								<p>Frontend Developer. I am constantly developing and studying new technologies in IT. Currently I
									specialize in React, but also open to other suggestions. Work experience half a year on freelance. I
									am
									looking for a job in a dynamically developing company with interesting tasks and career opportunities.
									I will be glad to mutual cooperation.</p>
							</div>
						</div>
								<Button title={'MORE ABOUT ME'} path={'#/about'}/>
					</div>
					<div>
						<Header/>
					</div>
				</div>
			</div>
		</div>
	)
}