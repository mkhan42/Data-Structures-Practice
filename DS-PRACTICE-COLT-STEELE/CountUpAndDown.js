function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    //O(n)
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    //O(n)
    console.log("Back down. Bye!");
}

console.log(countUpAndDown(10));

//O(n)