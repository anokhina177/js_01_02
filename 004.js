//Эта функция необходима для проверки вводимого значения 
function isNaN2Zero(x) {
    if (isNaN(x))
        return 0;
    return x;
}

function add(x, y) {
    x = isNaN2Zero(x);
    y = isNaN2Zero(y);
    return x + y;
}

function substract(x, y) {
    x = isNaN2Zero(x);
    y = isNaN2Zero(y);
    return x - y;
}

function multiply(x, y) {
    x = isNaN2Zero(x);
    y = isNaN2Zero(y);
    return x * y;
}

function divide(x, y) {
    x = isNaN2Zero(x);
    y = isNaN2Zero(y);
    return x / y;
}