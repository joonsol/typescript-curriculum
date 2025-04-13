type Shape ={
    area:()=>number
}

type Circle =Shape & {
    radius :number
}

type Rect = Shape & {
    width:number,
    height:number
}
const circle :Circle ={
    radius :6,
    area :function(){
        return Math.PI*this.radius**2
    }
}


const rect :Rect={
    width:9,
    height:7,
    area:function(){
        return this.width*this.height
    }
}

console.log(`Circle Area: ${circle.area()}`)
console.log(`Rect Area: ${rect.area()}`)