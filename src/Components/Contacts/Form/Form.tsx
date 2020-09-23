import React from "react";
import classes from "./Form.module.scss";
import {Button} from "../../../common/components/Button/Button";


export const Form = () => {
	return (
		<form className={classes.contactForm}>
			<div className={classes.inputs}>
				<input type="text" name={'name'} placeholder={'Your name'} required/>
				<input type="email" name={'name'} placeholder={'Your email'} required/>
				<input type="tel" name={'name'} placeholder={'Your phone number'}/>
			</div>
			<textarea name={'message'} placeholder={'Your message'} required/>
			<Button title={'Send message'} path={'#'}/>
		</form>
	)
}