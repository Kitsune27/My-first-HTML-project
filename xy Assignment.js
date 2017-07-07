var x = 2;
var y = 4;

function getSum(x, y) {
	return x + y;
}

function getProduct(x, y) {
	return x * y;
}

function getSubtraction() {
	return getSum - getProduct;
}

getSum(2, 4);
getProduct(2,4);
getSubtraction();

console.log('Sum: ' + getSum);
console.log('Product: ' + getProduct);
console.log('Subtraction of totals: ' + getSubtraction);