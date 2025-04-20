interface Car {
    brand :string;
}
interface Electric {
    battery:Number;
}


type ElectricCar = Car & Electric


const myCar :ElectricCar ={
    brand:"Hyundai",
    battery:85
}

console.log(myCar)