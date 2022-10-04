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


        if(isAlphaNumeric(element)) {
            // count[element] = count[element] ? count[element] + 1 : 1;
            element = element.toLowerCase()
            count[element] = ++count[element] || 1
        }

        // if(count[element] > 0) {
        //     count[element]++;
        // }

        // else {
        //     count[element] = 1;
        // }
    })

   return count
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false
    }
    
    return true;
}

// charCodeAt(0)

console.log(charCount('hello my Name is n...'))