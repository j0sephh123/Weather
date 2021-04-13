import {weekDays} from "./hashMaps";

const addLeadingZero = minute => {
	if(minute.toString().length === 1) {
		return `0${minute}`;
	}

	return minute;
}

export const parseUnixDates = (dt, sunrise, sunset) => {
	const [parsedDate, parsedSunrise, parsedSunset] = [
		new Date(dt * 1000),
		new Date(sunrise * 1000),
		new Date(sunset * 1000),
	];

	const parsedDayArray = [
		parsedDate.getMonth() + 1,
		parsedDate.getDate(),
		parsedDate.getFullYear().toString().slice(2),
	];

	return ({
		date: parsedDayArray.join('/'),
		weekDay: weekDays[parsedDate.getDay()],
		sunriseTime: `${addLeadingZero(parsedSunrise.getHours())}:${addLeadingZero(parsedSunrise.getMinutes())}`,
		sunsetTime: `${addLeadingZero(parsedSunset.getHours())}:${addLeadingZero(parsedSunset.getMinutes())}`,
	})
}

export const ceilTempData = tempData => Object
	.entries(tempData)
	.reduce((acc, [key, val]) => {
		console.log()
		return ({
			...acc,
			[key]: Math.ceil(val),
		})
	}, {})

export const getParsedDays = daily => {
	return daily
		.slice(0, 7)
		.map(day => {
			const {
				dt,
				sunrise,
				sunset,
				clouds,
				humidity,
				wind_speed: windSpeed,
				temp,
				weather,
			} = day;

			const {id, main, ...weatherFields} = weather[0];

			const {morn: mornTemp, eve: eveTemp, min: minTemp, max: maxTemp, ...tempFields} = temp;

			return ({
				...parseUnixDates(dt, sunrise, sunset),
				clouds,
				humidity,
				windSpeed,
				temp: ceilTempData(tempFields),
				weather: weatherFields,
			});
		})
}