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

// Function to prompt user for password options
function getPasswordOptions() {
  // Length of password:
  let passwordLength = prompt("Password length: Choose At least 10 characters but no more than 64")

  // At least 10 characters but no more than 64.
  if (passwordLength >= 10 && passwordLength <= 64) {
    let lowerOption = confirm("Character types: Do you whant to use lowercase characters");
    let upperOption = confirm("Character types: Do you whant to use uppercase characters");
    let numericOption = confirm("Character types: Do you whant to use numeric characters");
    let specialOption = confirm("Character types: Do you whant to use special characters");

    // number of types (true and false are represented as 1 and 0)
    const typesCount = lowerOption + upperOption + numericOption + specialOption;

    // Array of types options
    const typesArr = [{ lowerOption }, { upperOption }, { numericOption }, { specialOption }].filter(item => Object.values(item)[0]);

    // Doesn't have a selected type
    if (typesCount === 0) {
      return '';
    }

    //return number of types, array of types options and 
    return {typesCount, typesArr, passwordLength};
  }

}

const randomFunc = {
  lower: getRandom(lowerCasedCharacters),
  upper: getRandom(upperCasedCharacters),
  number: getRandom(numericCharacters),
  symbol: getRandom(specialCharacters)
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}
// Function to generate password with user input
function generatePassword() {
  const {typesCount, typesArr, passwordLength} = getPasswordOptions();
  console.log(typesCount);
  for (let i = 0; i < passwordLength; i+=typesCount){
    console.log(i);
    typesArr.array.forEach(element => {
      console.log(element);
    });
  }
  return "password"
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