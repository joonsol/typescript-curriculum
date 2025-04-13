function printFruites(fruits:string []):void {
    fruits.forEach(fruit =>{
        console.log(`${fruit}`)
    })
}


printFruites(['사과','바나나','오렌지'])