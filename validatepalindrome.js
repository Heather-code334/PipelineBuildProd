// validatepalindrome.js

// Predefined array of strings
const words = ["racecar", "hello", "Level", "I", "world", "mad am", "12321", "not a palindrome"];

// Function to clean a string: make it lowercase and remove spaces
function cleanString(str) {
    return str.toLowerCase().replace(/\s+/g, '');
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = cleanString(str);
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Function to find all palindromes in an array
function findPalindromes(arr) {
    const palindromes = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }

    return palindromes;
}

// Find and print the palindromes
const palindromeWords = findPalindromes(words);
console.log("Palindromes found:");
console.log(palindromeWords);
