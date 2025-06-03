import { getWeather } from "./weather";


const args = process.argv.slice(2);
const city = args[0];

(async() => {
    const result = await getWeather(city);
    if (typeof result === "string") {
            console.log(result);
    }else{
          console.log(`📍 City: ${result.city}`);
    console.log(`🌡️ Temp: ${result.temp}°C`);
    console.log(`🌥️ Weather: ${result.weather}`);
    console.log(`💧 Humidity: ${result.humidity}%`);
    console.log(`🌬️ Wind: ${result.wind} m/s`);
    }

})()