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
    let lower = confirm("Character types: Do you whant to use lowercase characters");
    let upper = confirm("Character types: Do you whant to use uppercase characters");
    let number = confirm("Character types: Do you whant to use numeric characters");
    let symbol = confirm("Character types: Do you whant to use special characters");

    // number of types (true and false are represented as 1 and 0)
    const typesCount = lower + upper + number + symbol;

    // Array of types options
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    // Doesn't have a selected type
    if (typesCount === 0) {
      return '';
    }

    //return number of types, array of types options and 
    return { typesCount, typesArr, passwordLength };
  }
}

//object of keys with random value
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
  const { typesCount, typesArr, passwordLength } = getPasswordOptions();
  let generatedPassword = "";
  // get index via step typesCount = 4 index (0, 4, 8)
  for (let i = 0; i < passwordLength; i += typesCount) {
    // get types objects on each step
    typesArr.forEach(element => {
      // get random typesArr keys. typesArr keys name shoul be equal to randomFunc keys name
      const key = Object.keys(element)[0];
      //filling a variable with a random value
      generatedPassword += randomFunc[key];
    });
  }

  console.log(generatedPassword);

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