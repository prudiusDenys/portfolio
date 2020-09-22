import React from "react";
import classes from "./BoxStats.module.scss";
import {StatsDataType} from "../../../../common/types/types";
import {StatsItem} from "./StatsItem/StatsItem";

export const BoxStats = () => {

	const statsData:StatsDataType = {
		experience:{
			number: 6,
			text: 'month of',
			textSpan: 'experience',
		},
		projects:{
			number: 4,
			text: 'completed',
			textSpan: 'projects'
		},
		customers:{
			number: 10,
			text: 'happy',
			textSpan: 'customers'
		},
		won:{
			number: 0,
			text: 'awards',
			textSpan: 'won'
		},
	}

	const statsItem = Object.values(statsData).map((el,i)=><StatsItem key={i} number={el.number} text={el.text} textSpan={el.textSpan}/>)

	return(
		<div className={classes.boxStartsRow}>
			{statsItem}
		</div>
	)
}