import React from "react";
import classes from "./ProfileRow.module.scss";


type PropsType = {
	firstName: string
	lastName: string
	age: string
	nationality?: string
	freelance: string
	address: string
	phone: string
	email: string
	skype: string
	languages: Array<string>
}

export const ProfileRow = (props: PropsType) => {

	return (
		<div className={classes.profileRow}>

			<div className={classes.profileColumn}>
				<ul>
					<li><span className={classes.spanTitle}>First name : </span><span
						className={classes.spanValue}>{props.firstName}</span></li>
					<li><span className={classes.spanTitle}>Last name : </span><span
						className={classes.spanValue}>{props.lastName}</span></li>
					<li><span className={classes.spanTitle}>Age : </span><span
						className={classes.spanValue}>{props.age}</span></li>
					<li><span className={classes.spanTitle}>Nationality : </span><span
						className={classes.spanValue}>{props.nationality}</span></li>
					<li><span className={classes.spanTitle}>Freelance : </span><span
						className={classes.spanValue}>{props.freelance}</span></li>
				</ul>
			</div>

			<div className={classes.profileColumn}>
				<ul>
					<li><span className={classes.spanTitle}>Address : </span><span
						className={classes.spanValue}>{props.address}</span></li>
					<li><span className={classes.spanTitle}>phone : </span><span className={classes.spanValue}><a
						href="tel:3518441020">{props.phone}</a></span></li>
					<li><span className={classes.spanTitle}>Email : </span><span
						className={classes.spanValue}>{props.email}</span></li>
					<li><span className={classes.spanTitle}>Skype: </span><span
						className={classes.spanValue}>{props.skype}</span></li>
					<li><span className={classes.spanTitle}>Languages : </span><span className={classes.spanValue}>
						{
							props.languages.map((language, i, array) => (i === array.length - 1) ? language : language + ', ')
						}
						</span>
					</li>
				</ul>
			</div>
		</div>
	)
}