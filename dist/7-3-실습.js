function handleValue(value) {
    console.log(value.toFixed?.(2));
}
function hadleSafeValue(value) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
export {};
