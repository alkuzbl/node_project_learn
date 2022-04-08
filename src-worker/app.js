const factorial = require('./factorial')


const myFunc = (arr) => {
    const newArr = [];
    for (let i = 0; i < 100000000; i++) {
        newArr.push(i * i)
    }

    return arr.map(el => factorial(el))
}

const main = () => {

    performance.mark('start')

    const result = [
        myFunc([25, 20, 19, 48, 30, 50]),
        myFunc([25, 20, 19, 48, 30, 50]),
        myFunc([25, 20, 19, 48, 30, 50]),
        myFunc([25, 20, 19, 48, 30, 50]),

    ]
    console.log(result)
    performance.mark('end')
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main').pop());
}

setTimeout(()=>{
    console.log('SetTimeout app')
}, 1000)

main();
