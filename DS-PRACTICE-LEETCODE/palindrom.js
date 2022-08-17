/*Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. */

var isPalindrome = function(x) {
    
    if (x == x.split('').reverse('').join(''))
        return true;
else
    return false;

};