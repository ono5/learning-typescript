"use strict";
var _a;
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add2("Hello", "TypeScript");
result.split(" ");
var fetchedUserData = {
    id: "u1",
    name: "user1",
    job: {
        title: "Developer",
        description: "TypeScript",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = null;
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
