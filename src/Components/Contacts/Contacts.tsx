import React from "react";
import classes from "./Contacts.module.scss";
import {Title} from "../../common/components/Title/Title";
import {Header} from "../Header/Header";
import styleContainer from '../../common/styles/container/Container.module.scss'
import {Form} from "./Form/Form";
import {ContactsBox} from "./ContactsBox/ContactsBox";
import {BurgerMenu} from "../Header/BurgerMenu/BurgerMenu";

export const Contacts = () => {
	return (
		<div className={classes.contacts}>
			<BurgerMenu/>
			<Header/>
			<Title title={'get in'} titleSpan={'touch'} titleBg={'contact'}/>
			<div className={styleContainer.container}>
				<div className={classes.contactsContent}>
					<ContactsBox/>
					<Form/>
				</div>
			</div>
		</div>
	)
}