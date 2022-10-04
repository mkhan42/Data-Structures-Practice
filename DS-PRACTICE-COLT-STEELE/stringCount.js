//Write a function which takes in a string and returns counts of each character in the string

/*
//text cases
charCount("aaaa") //{a:4}
charCount("hellp") //{h:1, e:1, l:2, o:1}

"my phone number is 182763"
"Hello hi" //counting unpercase and lowercase?

charCount("") //what are we returning?
*/


function charCount(str) {
    //do something
    //return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts
    //make object to return at end
    //loop over string
    //return object at end

    let count = {}

    let myStr = str.split('')

    const letterFreq = myStr.forEach((element) => {

        element = element.toLowerCase()

        if(/[a-z0-9]/.test(element)) {
            count[element] = count[element] ? count[element] + 1 : 1;
        }

        // if(count[element]) {
        //     count[element] = count[element] + 1;
        // }

        // else {
        //     count[element] = 1;
        // }
    })

   return count
}

console.log(charCount('hello my Name is n...'))