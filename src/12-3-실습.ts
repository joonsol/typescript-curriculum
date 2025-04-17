function logItems(items:string[]|string){
    if(Array.isArray(items)){
        items.forEach((item)=>console.log(item))
    }else{
        console.log(items)
    }
}


logItems('단일 아이템')
logItems(['단일 아이템','아이템2'])