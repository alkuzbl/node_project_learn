const {parentPort, workerData} = require('worker_threads')
const factorial = require('./factorial')


const myFunc = ({arr}) => {
    const newArr = [];
    for (let i = 0; i < 100000000; i++) {
        newArr.push(i * i)
    }

    return arr.map(el => factorial(el))
}

parentPort.postMessage(myFunc(workerData))
