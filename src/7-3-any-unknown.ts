function handleValue(value:any){
    console.log(value.toFixed?.(2));
}

function handleSafeValue(value:unknown){
    if(typeof value==="number"){
        console.log(value.toFixed(2))
    }
}
