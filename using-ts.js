var button = document.querySelector('button');
var input1 = document.querySelector('num1');
var input2 = document.querySelector('num2');
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    // Add 「+」 extention, number changes from string to number
    console.log(add(+input1.value, +input2.value));
});
