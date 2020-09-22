import React from "react";
import classes from "./PersonalInfoBox.module.scss";
import {PersonalBox} from "./PersonalBox/PersonalBox";
import {BoxStats} from "./BoxStats/BoxStats";

export const PersonalInfoBox = () => {
	return(
		<div className={classes.personalWrapper}>
			<PersonalBox/>
			<BoxStats/>
		</div>
	)
}