function logItems(n) {
    for(let i = 0; i < n; i++) {
       console.log(i) 
    }

    for(let j = 0; j < n; j++) {
       console.log(j) 
    }       
}

console.log(logItems(3))

//O(n) even with a second for loop; we drop constants