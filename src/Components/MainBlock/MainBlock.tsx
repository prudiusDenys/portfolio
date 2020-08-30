import React from "react";
import classes from "./MainBlock.module.css";
import styleContainer from '../common/styles/Container.module.css'


export const MainBlock = () => {
	return (
		<div className={classes.mainBlock}>
			<div className={styleContainer.container}>
				<div className={classes.mainBlockContent}>
					<div className={classes.welcomeBlock}>
						<div className={classes.welcome}>
							<span>Hi There</span>
							<h1>I am Denis Prudius</h1>
							<p>FrontEnd Developer</p>
						</div>
						<div className={classes.photo}>
							<img src="https://aforisticando.com/wp-content/uploads/2019/11/steve-jobs-frasi-aforisticando.jpg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}