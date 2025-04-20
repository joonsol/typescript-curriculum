type Logger ={log:()=>void}

type Timestamp={time:Date}

function printLog(item:Logger & Timestamp){
    item.log()
    console.log('Logged at:', item.time)
}

printLog({
    log:()=>console.log('logging...'),
    time:new Date()
})