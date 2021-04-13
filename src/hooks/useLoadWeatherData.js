import {useEffect} from 'react';
import {getWeather} from "../api";
import {getParsedDays} from '../utils/parseData'
import {actionTypes} from '../constants'


const useLoadWeatherData = dispatch => {
	useEffect(() => {
		const loadWeather = async () => {
			const {data} = await getWeather();
			const {daily} = data;

			dispatch({
				type: actionTypes.LOAD_WEATHER,
				payload: {
					parsedDays: getParsedDays(daily)
				},
			});
		}
		loadWeather();
	}, [])
}

export default useLoadWeatherData;