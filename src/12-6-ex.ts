function logNames(name:string|string[]):void {
    if(Array.isArray(name)){
        console.log(`이름 목록 , ${name.join(', ')}`)
    }else{
        
        console.log(`이름: ${name}`)
    }
}

logNames('Alice')
logNames(['Alice','Jerry'])