let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let alphaReverse = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];

// Function to encrypt a message using the Atbash cipher
function atbash(val) {
 //add your code here
 let result = []; 
 let upperVal = val.toUpperCase(); //turns everything in the string val uppercase

  for (let i = 0; i < upperVal.length; i++) { // as long as the number of the element that is being 																						 run is in the val string as well, keep running the code
    let currentLetter = upperVal[i];

    if (matchAlpha(currentLetter) >= 0) { //defines currentLetter as whatever letter is being encrypted
      let newIndex = (matchAlpha(currentLetter)) % 26;
      result.push(alphaReverse[newIndex]);
    } else {
      result.push(currentLetter); 
    }
  }
  return result.join(''); 
}

function matchAlpha(letter1) {
  for (let j = 0; j < alpha.length; j++) {
    if (letter1 === alpha[j]) {

      return j;
    }
  }
  return -1; 
}


function atbashFunction() {
  let inputPhrase = document.getElementById('inputPhrase').value;
  // Encrypt the phrase
  let encryptedPhrase = atbash(inputPhrase);
  document.getElementById('encrypted').textContent = encryptedPhrase;
}
