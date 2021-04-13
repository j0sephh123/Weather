import './DayHeader.scss'

const DayHeader = ({weekDay, date, sunriseTime, sunsetTime}) => {
	return (
		<div className='DayHeader'>
			<div className='DayHeaderLeft'>
				<div className='weekDay'>{weekDay.toUpperCase()}</div>
				<div className='date'>{date}</div>
			</div>
			<div className='DayHeaderRight'>
				<div>Sunrise <span>{sunriseTime}</span></div>
				<div>Sunset <span>{sunsetTime}</span></div>
			</div>
		</div>
	)
}

export default DayHeader;