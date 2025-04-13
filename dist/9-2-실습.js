function processInput(value) {
    if (typeof value === "string") {
        console.log(`String : ${value.toUpperCase()}`);
    }
    else if (typeof value === 'number') {
        console.log(`String : ${value.toFixed(2)}`);
        // 소수점까지
    }
    else {
        console.log("Unknown type");
    }
}
processInput("Hello");
processInput(42);
processInput(true);
export {};
