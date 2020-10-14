import React from "react";
import classes from "./Form.module.scss";
import {useForm} from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {sendEmail} from "../../../api/apiRequests";

export type InputsType = {
	name: string
	email: string
	phone: string
	message: string
}
const schema = Yup.object().shape({
	name: Yup.string().required('This Field is required').matches(/^([A-Za-zА-ЯЁа-яё])/g, 'name is not valid'),
	email: Yup.string().email('email is not valid').required('This Field is required'),
	phone: Yup.string().matches(/((\+(\d{1,3}))?[ -]?(\d{3})[ -]?(\d{3})[ -]?(\d{2})[ -]?(\d{2})|^$)/gm, 'phone number is not valid'),
	message: Yup.string().required('This Field is required')
})


export const Form = () => {

	const {register, handleSubmit, errors, formState} = useForm<InputsType>({
		mode: "all",
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: InputsType, e: any) => {
		sendEmail(data, e)
	}

	return (
		<form className={classes.contactForm} onSubmit={handleSubmit(onSubmit)}>
			<div className={classes.inputsBox}>
				<div className={classes.inputItem}>
					<input style={{borderColor: errors.name && '#f72b1c'}} type="text" name={'name'} placeholder={'Your name'}
								 ref={register}/>
					{errors.name && <span className={classes.error}>{errors.name.message}</span>}
				</div>
				<div className={classes.inputItem}>
					<input style={{borderColor: errors.email && '#f72b1c'}} type="email" name={'email'} placeholder={'Your email'}
								 ref={register}/>
					{errors.email && <span className={classes.error}>{errors.email.message}</span>}
				</div>
				<div className={classes.inputItem}>
					<input style={{borderColor: errors.phone && '#f72b1c'}} type="tel" name={'phone'}
								 placeholder={'Your phone number'} ref={register}/>
					{errors.phone && <span className={classes.error}>{errors.phone.message}</span>}
				</div>
			</div>
			<div className={classes.textareaBox}>
				<textarea style={{borderColor: errors.message && '#f72b1c'}} name={'message'} placeholder={'Your message'}
									ref={register}/>
				{errors.message && <span className={classes.error}>{errors.message.message}</span>}
			</div>
			<button type={'submit'} disabled={formState.isSubmitting}>Send message</button>
		</form>
	)
}