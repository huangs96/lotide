let head = function (array) {
	if(!Array.isArray(array) || array.length === 0) {
    return null
	}

	return array[0];
}

console.log(head([5,6,7]));
console.log(head(["Hello", "Lighthouse", "Labs"]));
console.log(head([]));

module.exports = head;