import {temperatureTypes, actionTypes} from '../constants'
import {convertDegrees} from "../utils/convert";

const {C, F} = temperatureTypes;

const initialState = {
	days: [],
	activeDay: null,
	temperatureType: C,
};

export const weather = (state = initialState, {type, payload}) => {
	switch (type) {
		case actionTypes.TOGGLE_ACTIVE_DAY: {
			const { dayDate } = payload;

			const sameDay = state.activeDay === dayDate;

			return {
				...state,
				activeDay: sameDay ? null : dayDate,
			}
		}
		case actionTypes.TOGGLE_TEMPERATURE_TYPE: {
			return {
				...state,
				temperatureType: state.temperatureType === C ? F : C,
				days: state.days.map(({temp, ...rest}) => ({
						...rest,
						temp: {
							day: convertDegrees(state.temperatureType, temp.day),
							night: convertDegrees(state.temperatureType, temp.night),
						}
					})
				),
			}
		}
		case actionTypes.LOAD_WEATHER: {
			const {parsedDays} = payload;

			return {
				...state,
				days: [...parsedDays],
			}
		}
		default:
			return state;
	}
};