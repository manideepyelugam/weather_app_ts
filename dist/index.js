"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = require("./weather");
const args = process.argv.slice(2);
const city = args[0];
(() => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, weather_1.getWeather)(city);
    if (typeof result === "string") {
        console.log(result);
    }
    else {
        console.log(`📍 City: ${result.city}`);
        console.log(`🌡️ Temp: ${result.temp}°C`);
        console.log(`🌥️ Weather: ${result.weather}`);
        console.log(`💧 Humidity: ${result.humidity}%`);
        console.log(`🌬️ Wind: ${result.wind} m/s`);
    }
}))();
