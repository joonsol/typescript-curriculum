function calculationCircleArea(radius:number):number{

    if(radius<0){
        console.log('반지름은 0보다 커야 합니다.')
    }
 return Math.PI *radius*radius
}

let radius:number =5

console.log(`너비는? ${calculationCircleArea(radius)}`)


