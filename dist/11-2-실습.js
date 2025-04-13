const circle = {
    radius: 6,
    area: function () {
        return Math.PI * this.radius ** 2;
    }
};
const rect = {
    width: 9,
    height: 7,
    area: function () {
        return this.width * this.height;
    }
};
console.log(`Circle Area: ${circle.area()}`);
console.log(`Rect Area: ${rect.area()}`);
export {};
