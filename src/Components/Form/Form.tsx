import React from "react";
import classes from "./Form.module.css";
import styleContainer from '../../common/styles/container/Container.module.scss'

export const Form = () => {
	return (
		<div className={classes.form}>
			<div className={styleContainer.container}>
				<div className={classes.formContent}>
					<div className={classes.title}>
						<h2>Contacts</h2>
					</div>
					<form action="" className={classes.formBox}>
						<input type="text" placeholder={'Name'} required/>
						<input type="text" placeholder={'E-mail'} required/>
						<textarea style={{resize: 'none'}} placeholder={'Your message'} required>
					</textarea>
					</form>
					<div className={classes.send}>
						<button>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}