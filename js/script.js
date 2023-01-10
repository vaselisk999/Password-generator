// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const randomFunc = {
  lower: getRandom(lowerCasedCharacters),
  upper: getRandom(upperCasedCharacters),
  number: getRandom(numericCharacters),
  symbol: getRandom(specialCharacters)
}

// Function to prompt user for password options
function getPasswordOptions() {
  let combinedCharacters = [];
  // Length of password:
  let passwordOption = prompt("Password length: Choose At least 10 characters but no more than 64")
  console.log(passwordOption);

  // At least 10 characters but no more than 64.
  if (passwordOption >= 10 && passwordOption <= 64) {
    let lowercaseOption = confirm("Character types: Do you whant to use lowercase characters")
    console.log(lowercaseOption)

    if(lowercaseOption){
      combinedCharacters.concat(lowerCasedCharacters);
    }

    let uppercaseOption = confirm("Character types: Do you whant to use uppercase characters")
    console.log(uppercaseOption)

    if(uppercaseOption){
      combinedCharacters.concat(upperCasedCharacters);
    }

    let numericOption = confirm("Character types: Do you whant to use numeric characters")
    console.log(numericOption)

    if(numericOption){
      combinedCharacters.concat(numericCharacters);
    }

    let specialCharactersOption = confirm("Character types: Do you whant to use special characters")
    console.log(specialCharactersOption);

    if(specialCharactersOption){
      combinedCharacters.concat(specialCharacters);
    }
  }

  console.log(combinedCharacters);

}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
// Function to generate password with user input
function generatePassword() {
  // let password = "";
  // for (let i = 0; i < passLength; i++){

  // }
  // return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);