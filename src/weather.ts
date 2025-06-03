import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();


type Weather = {
    city : string,
    temp : number,
    weather : string,
    humidity : number,
    wind : number
}




export const getWeather = async(city : string):Promise<Weather | string> => {
     try {

        if(!city) return "enter city name";

        const apiKey = process.env.OPENWEATHER_API_KEY;
        if(!apiKey) return "Apikey is missing";

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

        const data =  response.data;

          const result: Weather = {
            city: data.name,
            temp: data.main.temp,
            weather: data.weather[0].main,
            humidity: data.main.humidity,
            wind: data.wind.speed,
        };

        return result;
        
     } catch (error : any) {
        if(error.response?.data?.message){
            return `⚠️ ${error.response.data.message}`;
        }

         return "❌ Failed to fetch weather data";
        
     }
}