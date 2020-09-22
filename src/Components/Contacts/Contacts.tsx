import React from "react";
import classes from "./Contacts.module.scss";
import {Title} from "../../common/components/Title/Title";
import {Header} from "../Header/Header";

export const Contacts = () => {
	return(
		<div className={classes.contacts}>
			<Header/>
			<Title title={'get in'} titleSpan={'touch'} titleBg={'contact'}/>
		</div>
	)
}