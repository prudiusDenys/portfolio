import React from "react";
import classes from "./Home.module.scss";
import myPhoto from '../../assets/images/myPhoto.jpg'
import {Button} from "../../common/components/Button/Button";

const myPhotoStyles = {
	backgroundImage: `url(${myPhoto})`
}

export const Home = () => {
	return (
		<div className={classes.mainBlockContent}>
			<div className={classes.colorBlock}>
			</div>
			<div className={classes.welcomeBlock}>

				<div className={classes.photo} style={myPhotoStyles}>

				</div>
				<div className={classes.aboutMe}>
					<div className={classes.greeting}>
						<h6>Hi There !</h6>
					</div>
					<div className={classes.me}>
						<h1>I am <span>Denis Prudius</span></h1>
					</div>
					<div>
						<div className={classes.aboutMeInfo}>
							<p>I am a responsible, motivated Front-end developer, constantly developing and studying new technologies
								in IT. Experience in developing landing pages, SPA using React / Redux, JavaSript, TypeScript, REST API, Material UI,
								Tests, etc... I have good analytical skills. I learn easily and with pleasure. I quickly find a common
								language with people.</p>
						</div>
					</div>
					<Button title={'MORE ABOUT ME'} path={'#/about'}/>
				</div>
				<div>
				</div>
			</div>
		</div>
	)
}