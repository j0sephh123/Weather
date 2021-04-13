# Start 
`clone`    

Create `src/keys.js`  
`export const WEATHER_API_KEY = the key as a string`

`yarn && yarn start`  

# Comments
Obviously, there is no need for redux here..  
Everything that has to do with CSS needs to be ignored.  
Other than that, nothing interesting really, just an API call, parse/map the data and render.

# Models
## API response
Used Openweathermap API, it requires API key  
[API docs](https://openweathermap.org/current)  
[Icons Link](https://openweathermap.org/weather-conditions)  
Nothing interesting for the API itself, tried to map the used fields in the response  

| Name        | Type             | Example                    |
| ----        | ----             | ----                       |
| dt          | UNIX timestamp   | 1618653600                 |
| clouds      | int              | 85                         |
| humidity    | int              | 47                         |
| wind_speed  | float            | 2.92                       |                          
| sunrise     | UNIX timestamp   | 1618630913                 |  
| sunset      | UNIX timestamp   | 1618679413                 |  
| temp        | [Temp]             |                            |  
| weather     | [Weather]        |                            |  

## Temp
| Name        | Type             | Example                    |
| ----        | ----             | ----                       |
| day         | float            | 11.67                      |
| night       | float            | 3.52                       |

## Weather
| Name        | Type             | Example                    | Comments |
| ----        | ----             | ----                       | ----     |
| icon        | string           | "10d"                      | http://openweathermap.org/img/wn/10d@2x.png |
| description | string           | "light rain"               |                       |
