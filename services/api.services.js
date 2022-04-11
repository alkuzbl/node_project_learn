import {getKeyValue} from './storage.services.js'
import axios from "axios";



const getIcon = (code) => {
    switch (code.slice(0, -1)) {
        case '01':
            return '☀'
        case '02':
            return '🌤'
        case '03':
            return '☁'
        case '04':
            return '☁'
        case '09':
            return '🌧'
        case '10':
            return '🌦'
        case '11':
            return '⛈'
        case '13':
            return '❄'
        case '50':
            return '🌫'
    }
}


const getWeather = async (city) => {
    const token = await getKeyValue('token')
    if (!token) {
        throw new Error('Не задан API ключ, установите ключ при помощи команды -t [API_KEY]')
    }

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })

    return response
}

export {getWeather, getIcon}
