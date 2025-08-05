// Task 1: Reverse words in a sentence
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// Task 2: Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Task 3: Count vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example inputs
let sentence = "JavaScript is fun to learn";
let array = [1, 2, 2, 3, 4, 4, 5];
let string = "Hello World";

// Calling functions
console.log("Reversed sentence:", reverseWords(sentence));
console.log("Array without duplicates:", removeDuplicates(array));
console.log("Number of vowels:", countVowels(string)
