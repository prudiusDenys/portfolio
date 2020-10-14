import {InputsType} from "../Components/Contacts/Form/Form";
import axios from "axios";


export const requestsAPI = {
	createRequest(data: InputsType){
		return axios.post('https://portfolio-smtp-server.herokuapp.com/sendMessage',data)
	}
}

export const sendEmail = (data: InputsType, e: any)=>{
	requestsAPI.createRequest(data)
		.then((res)=>e.target.reset())
}