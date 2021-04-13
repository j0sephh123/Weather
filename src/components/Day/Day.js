import {actionTypes} from '../../constants'
import {DayHeader, Forecast, Details} from './'
import './Day.scss'

const forecastTypes = ['day', 'night'];

const Day = ({activeDay, day, temperatureType, dispatch}) => {
	const {
		weekDay,
		date,
		weather,
		temp,
		sunriseTime,
		sunsetTime,
		...details
	} = day

	const isActive = day.date === activeDay;

	let { icon, description } = weather;
	icon = icon.slice(0,2);

	const toggleActiveDay = () => {
		dispatch({
			type: actionTypes.TOGGLE_ACTIVE_DAY,
			payload: {
				dayDate: date,
			}
		})
	}

	return (
		<div
			onClick={toggleActiveDay}
			className={`Day${isActive ? " active" : ""}`}>
			<DayHeader
				sunriseTime={sunriseTime}
				sunsetTime={sunsetTime}
				weekDay={weekDay}
				date={date} />
			{forecastTypes.map(forecastType => <Forecast
					temperatureType={temperatureType}
					key={forecastType}
					type={forecastType}
					feelsLike={temp[forecastType]}
					temperature={temp[forecastType]}
					icon={icon}
					description={description}
				/>)
			}
			{isActive && <Details{...details} />}
		</div>
	)
}

export default Day;