
// First Way (longer method)
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
	    total += i;
    }
    return total;
}

//in a loop
//total += i; -> ‘+’ means n additions
//total += i; -> ‘=’ means n assignments
//i++ -> n additions and n assignments
//let total = 0; -> 1 assignment
//let i = 1 -> 1 assignment
//i <= n -> n comparisons 
//(if n = 20, 20 comparisons, 20 assignments, 20 additions, 20 assignments again


console.log(addUpTo(6))

let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
//1.257500000006985 seconds
//changes every time


// Second Way (shorter method)
function addUpToSecond(n) {
    return n * (n + 1) / 2;
}

//1 multiplication
//1 addition
//1 division
//doesn’t matter what n is
//only three simple operations


console.log(addUpToSecond(6))

let t3 = performance.now();
addUpToSecond(1000000000)
let t4 = performance.now
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)
// 0.001000000 seconds; significantly shorter
