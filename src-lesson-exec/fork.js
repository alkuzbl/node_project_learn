process.on('message', (msg)=>{
    if (msg === 'end'){
        process.disconnect()
        return
    }
    console.log('Получил:' + msg)
    process.send('Pong')
})
