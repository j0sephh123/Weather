import {actionTypes} from '../../constants'
import './TemperatureType.scss'

const TemperatureType = ({dispatch, temperatureType}) => {

	const toggleTemperatureType = () => {
		dispatch({
			type: actionTypes.TOGGLE_TEMPERATURE_TYPE,
		});
	}

	return (
		<div className='TemperatureType'>
			<span onClick={toggleTemperatureType}>{temperatureType}</span>
		</div>
	)
}

export default TemperatureType;

