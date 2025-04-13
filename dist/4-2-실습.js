"use strict";
function filterFruits(fruites) {
    return fruites.filter(fruit => fruit.startsWith('b'));
}
let fruitList = ["apple", "banana", "blueberry", "cherry"];
console.log(`b로 시작하는 과일:${filterFruits(fruitList)}`);
