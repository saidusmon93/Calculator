var input2 = document.getElementById("input2");
const input1 = document.getElementById("input1");
var input3 = document.getElementById('input3');
var color1 = document.getElementById('header');
var operation = null;

function func(value) {
    if (value && !operation) {
        input1.value = input1.value += value;
    }
    if (operation) {
        input2.value = input2.value += value;
    }
    if (value === '+') {
        operation = value;
    }
    if (value === '-') {
        operation = value;
    }
    if (value === '*') {
        operation = value;
    }
    if (value === '/') {
        operation = value;
    }
    if (value === '%') {
        operation = value;
    }

}

function result() {
    input3.value = eval(input1.value + input2.value);
    input2.value = input1.value;
    input1.value = '';
    operation = null

}

function c() {
    input1.value = '';
    input2.value = '';
    input3.value = '';
   

}