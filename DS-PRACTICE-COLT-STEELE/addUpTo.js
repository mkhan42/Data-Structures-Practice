
// First Way (longer method)
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
	    total += i;
    }
    return total;
}

console.log(addUpTo(6))

// Second Way (shorter method)
function addUpToSecond(n) {
    return n * (n + 1) / 2;
}

console.log(addUpToSecond(6))
