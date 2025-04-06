function filterFruits(fruites:string[]):string[]{
    return fruites.filter(fruit=>fruit.startsWith('b'))
}

let fruitList :string[]=["apple", "banana","blueberry","cherry"]


console.log(`b로 시작하는 과일:${filterFruits(fruitList)}`)