import React from "react";
import classes from "./Footer.module.css";
import styleContainer from '../common/styles/Container.module.css'


export const Footer = () => {

	return (
		<div className={classes.footer}>
			<div className={styleContainer.container}>
				<div className={classes.footerContent}>
					<div className={classes.title}>
						<h2>Denis Prudius</h2>
					</div>
					<div className={classes.social}>
						<ul className={classes.socialLinks}>
							<li><a href="#">Linkedin</a></li>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Vkontakte</a></li>
							<li><a href="#">Instagram</a></li>
						</ul>
					</div>
					<div className={classes.copyright}>
						<p>© 2019 All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</div>
	)
}