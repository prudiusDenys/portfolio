import React from "react";
import classes from "./ContactsBox.module.scss";
import {faGithub, faLinkedinIn, faVk} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";
import {CustomTitle} from "../../../common/components/CustomTitle/CustomTitle";


export const ContactsBox = () => {
	return (
		<div className={classes.boxContacts}>
			<CustomTitle customTitle={'DON\'T BE SHY !'}/>
			<p>
				Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
				opportunities to be part of your visions.
			</p>
			<div className={classes.myContacts}>
				<div className={classes.icon}>
					<FontAwesomeIcon icon={faEnvelopeOpen}/>
				</div>
				<span>Mail me</span>
				<a href="mailto:prdslife@gmail.com">prdslife@gmail.com</a>
			</div>
			<div className={classes.myContacts}>
				<div className={classes.icon + ' ' + classes.phoneIcon}>
					<FontAwesomeIcon icon={faPhoneSquareAlt}/>
				</div>
				<span>Call me</span>
				<a href="tel:3518441020">+393518441020</a>
			</div>
			<ul className={classes.socialList}>
				<li><a href="https://www.linkedin.com/in/denzimm"><FontAwesomeIcon icon={faLinkedinIn} className={classes.icon}/></a></li>
				<li><a href="https://vk.com/denzimmer"><FontAwesomeIcon icon={faVk} className={classes.icon}/></a></li>
				<li><a href="https://github.com/prudiusDenys"><FontAwesomeIcon icon={faGithub} className={classes.icon}/></a>
				</li>
			</ul>
		</div>
	)
}