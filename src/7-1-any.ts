let data: any = "Hello";
data = 42;
data = true;


function printData(value:any):void{
    console.log(value)
}

printData('this is string')
printData(42)
printData(null)