const checkButton= document.getElementById('check-btn');
const inputText = document.getElementById('text-input');
const resultPalindrome = document.getElementById('result');
  checkButton.addEventListener('click', function() {
    const inputValue = inputText.value.trim();
    
    if (!inputValue) {
      alert("Please input a value"); // if empty it will alert 
    } else {
     const palindromeCheck = isPalindrome(inputValue); // example: inputValue = cat
     showResult(palindromeCheck, inputValue);
    }
  });

  function cleanPalindrome(reg){
    return reg.toLowerCase().replace(/[^a-z0-9]/g, '');
  }
  function isPalindrome(reg){
    const cleaned = cleanPalindrome(reg);
    return cleaned === cleaned.split('').reverse().join('');
  }
 
  function showResult(isPalindrome, originalText) {
  
  if (isPalindrome === true) {
    resultPalindrome.textContent = `"${originalText}" is a palindrome!`;
    resultPalindrome.style.color = 'green';
  } else {
    resultPalindrome.textContent = `"${originalText}" is NOT a palindrome.`;
    resultPalindrome.style.color = 'red';
  }
}