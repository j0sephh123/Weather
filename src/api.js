import axios from "axios";
import {WEATHER_API_KEY} from './keys'

let url = 'https://api.openweathermap.org/data/2.5/onecall?'

const apiKeysMap = new Map([
	['lat', 42.6977],
	['&lon', 23.3219],
	['&units', 'metric'],
	['&exclude', 'current,minutely,hourly,alerts'],
	['&appid', WEATHER_API_KEY],
]);

export const getWeather = () => {
	apiKeysMap.forEach((val, key) => url += `${key}=${val}`);

	return axios.get(url)
}