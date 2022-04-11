#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {getKeyValue, saveKeyValue} from './services/storage.services.js'
import {printError, printSuccess, printHelp, printWeather} from './services/log.services.js'
import {getWeather, getIcon} from './services/api.services.js'


const saveToken = async (token) => {
    if (!token.length) {
        printError('Нет токена')
        return
    }
    try {
        await saveKeyValue('token', token)
        printSuccess('Токен сохранен')

    } catch (err) {
        printError(err.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Нет города')
        return
    }
    try {
        await saveKeyValue('city', city)
        printSuccess('Город сохранен')

    } catch (err) {
        printError(err.message)
    }
}

const getForecastWeather = async () => {
    try {
        const city = await getKeyValue('city')
        const weather = await getWeather(city)
        const icon = getIcon(weather.data.weather[0].icon)

        printWeather(weather.data, icon)
    } catch (err) {

        if (err?.response?.status === 401) {
            printError('Неверное указан токен')
        } else if (err?.response?.status === 404) {
            printError('Неверное указан город')
        } else {
            printError(err.message)
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        return saveCity(args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    return getForecastWeather()
}

initCLI()
