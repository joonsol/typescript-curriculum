"use strict";
function handleValue(value) {
    console.log(value.toFixed?.(2));
}
function handleSafeValue(value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
