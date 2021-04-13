import {iconUrl} from '../../../utils/links';
import './Forecast.scss'
import {degreeSymbol} from '../../../constants'

const Forecast = ({description, temperature, type, icon, temperatureType}) => {


	return (
		<div className='Forecast'>
			<div className='forecastType'>
				{type.toUpperCase()}
			</div>
			<div className='tempBox'>
				<div className='temp'>{`${temperature}${degreeSymbol}${temperatureType}`}</div>
				<span>{description}</span>
			</div>
			<div className='forecastImg'>
				<img src={iconUrl(icon, type)} />
			</div>
		</div>
	)
}

export default Forecast