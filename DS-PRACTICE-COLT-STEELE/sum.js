function sum(arr) {
    let total = 0;
    //one number
    for (let i = 0; i < arr.length; i++) {
        //i=0 is another number
      total += arr[i];
    }
    return total;
}

console.log(sum([1,2,3,4,5]));

//space complexity -> O(1) -> constant space
