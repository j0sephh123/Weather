const toFahrenheit = degrees => {
	return (degrees * (9/5)) + 32
}

const toCelsius = degrees => {
	return (5/9) * (degrees - 32)
}

const converter = {
	F: degrees => toCelsius(degrees),
	C: degrees => toFahrenheit(degrees),
}

export const convertDegrees = (temperatureType, degrees) => {
	return Math.ceil(converter[temperatureType](degrees))
}