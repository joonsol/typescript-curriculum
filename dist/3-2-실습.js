"use strict";
function chechAcess(userRole) {
    return userRole === "admin";
}
let role = "admin";
console.log(`Access granted : ${chechAcess(role)}`);
