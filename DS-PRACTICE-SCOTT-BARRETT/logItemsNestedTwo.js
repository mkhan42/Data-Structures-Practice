function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                console.log(i, j, k) 
            }       
        }       
    } 
}

console.log(logItems(10))
//O(n^3) -> simplifies to O(n^2)
//TIME COMPLEXITY IS O(n^2)