import React from "react";
import classes from "./PersonalBox.module.scss";
import {Button} from "../../../../common/components/Button/Button";
import {CustomTitle} from "../../../../common/components/CustomTitle/CustomTitle";
import {ProfileRow} from "./ProfileRow/ProfileRow";
import {PersonalInfoDataType} from "../../../../common/types/types";
import cv from '../../../../assets/cv/myCv.pdf'

export const PersonalBox = () => {

	const PersonalInfoData: Array<PersonalInfoDataType> = [{
		firstName: 'Denis',
		lastName: 'Prudius',
		age: '27 Years',
		nationality: 'Russian',
		address: 'Moscow',
		phone: '+393518441020',
		email: 'prdslife@gmail.com',
		skype: 'denis_prds',
		languages: ['Russian', 'English', 'German']
	}]

	const profileRow = PersonalInfoData.map((p, i) => {
		return (
			<ProfileRow key={i} firstName={p.firstName} lastName={p.lastName}
									age={p.age} nationality={p.nationality}
									address={p.address}
									phone={p.phone} email={p.email}
									skype={p.skype} languages={p.languages}/>
		)
	})

	return (
		<div className={classes.personalBox}>
			<div className={classes.personalInfo}>
				<CustomTitle customTitle={'PERSONAL INFOS'}/>
			</div>
			{profileRow}
				<Button title={'DOWNLOAD CV'} path={cv} download={true}/>
		</div>
	)
}