import chalk from 'chalk'
import dedent from 'dedent-js'


const printError = (err) => {
    console.log(`${chalk.bgRed('ERROR')} ${err}`)
}

const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen('SUCCESS')} ${msg}`)
}

const printHelp = () => {
    console.log(dedent`${chalk.bgCyan('HELP')}
     ${chalk.bgGreen('Без параметров')} - вывод погоды
     ${chalk.bgGreen('-s [CITY]')} - установка города
     ${chalk.bgGreen('-h')} - вывод помощи
     ${chalk.bgGreen('-t [API-KEY]')} - установка токена
     `)
}

const printWeather = (data, icon) => {
    console.log(data)
    console.log(dedent`${chalk.bgYellow('SUCCESS')} 
     Погода в городе: ${data.name}
     ${icon} ${data.weather[0].description}
     Сейчас на улице температура ${Math.round(data.main.temp)} C
     Ощущается как ${Math.round(data.main.feels_like)} C
     Минимальная температура ${Math.round(data.main.temp_min)} C, максимальная температура ${Math.round(data.main.temp_max)} C  в течении дня 
     Ветер ${Math.round(data.wind.speed)} м/с
     `)
}

export {printError, printSuccess, printHelp, printWeather}
