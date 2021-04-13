import {connect} from 'react-redux'
import {useLoadWeatherData} from './hooks'
import {Day, Loading, TemperatureType} from './components'

const App = ({ days, temperatureType, dispatch, activeDay }) => {
	const isLoading = days.length === 0;

	useLoadWeatherData(dispatch)

	if (isLoading) return <Loading/>

	return (
		<div className="App">
			<TemperatureType dispatch={dispatch} temperatureType={temperatureType} />
			<div className="WeatherContainer">
				{days.map((day, i) => <Day dispatch={dispatch} key={i} activeDay={activeDay} temperatureType={temperatureType} day={day} />)}
			</div>
		</div>
	);
}

export default connect(({weather}) => weather, null)(App);