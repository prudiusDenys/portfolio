export type ExperienceDataType = {
	id: string,
	time: TimeType,
	position: string,
	company: string,
	duties: string
}
export type TimeType = {
	workStart: string,
	workEnd: string
}
export type PersonalInfoDataType = {
	firstName: string
	lastName: string
	age: string
	nationality: string
	freelance: string
	address: string
	phone: string
	email: string
	skype: string
	languages: Array<string>
}
export type StatsDataType = {
	experience:{
		number: number
		text: string
		textSpan: string
	}
	projects:{
		number: number
		text: string
		textSpan: string
	}
	customers:{
		number: number
		text: string
		textSpan: string
	}
	won:{
		number: number
		text: string
		textSpan: string
	}
}