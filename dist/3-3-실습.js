"use strict";
function printTypes(arr) {
    arr.forEach((item, index) => {
        console.log(`Index ${index}: ${item}(type: ${typeof item})`);
    });
}
let mixed = [42, "hello", true];
printTypes(mixed);
