function isPalindrome(word) {
  // Convert the word to lowercase for case-insensitive comparison
  const lowerCaseWord = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = lowerCaseWord.length - 1;

  // Loop until the pointers meet or cross each other
  while (start < end) {
    // Compare the characters at the start and end positions
    if (lowerCaseWord[start] !== lowerCaseWord[end]) {
      return false; // Characters are different, not a palindrome
    }

    // Move the pointers towards the center of the word
    start++;
    end--;
  }

  return true; 
}

if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
