"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: "Max" }, { age: 30 });
var mergeObj2 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergeObj2);
