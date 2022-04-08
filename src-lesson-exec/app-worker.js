const {Worker} =  require('worker_threads')


const myFunc = (arr) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                arr
            }
        })

        worker.on('message', (msg) => {
            console.log(worker.threadId)
            res(msg)
        })
        worker.on('error', err => {
            rej(err)
        })
        worker.on('exit', () => {
            console.log('Завершено')
        })
    })
}

const main = async () => {

    try {
        performance.mark('start')

        const result = await Promise.all([
            myFunc([25, 20, 19, 48, 30, 50]),
            myFunc([25, 20, 19, 48, 30, 50]),
            myFunc([25, 20, 19, 48, 30, 50]),
            myFunc([25, 20, 19, 48, 30, 50]),

        ])
        console.log(result)
        performance.mark('end')
        performance.measure('main', 'start', 'end')
        console.log(performance.getEntriesByName('main').pop());
    } catch (err) {
        console.error(err.message)
    }
}

setTimeout(()=>{
    console.log('SetTimeout worker')
}, 1000)

main();
