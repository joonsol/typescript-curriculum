function printValue(value:string|number):void {
    if(typeof value ==='string'){
        console.log(`문자열입니다. ${value}.toUpperCase()`)
    }else{
        
        console.log(`숫자입니다. ${value}.toFixed()`)
    }
}

printValue('hello')
printValue(123456)