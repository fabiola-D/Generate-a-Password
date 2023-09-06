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
  // variable to store length of password from user input 
  let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )

  if(isNaN(length) === true){
    alert(`password length must be provided as number`);
    return;
  }

  if(length < 10) {
    alert(`password lenbth must be at least 10 characters`);
    return;
  }

  if(length > 64){
    alert(`password length must be less than 65 characters`)

  }

  let hasSpecialCharacters = confirm(
    "click OK to confirm including numberic characters"

  )

  let haslowerCasedcharacters = confirm(
    "click OK to comfirm including lowercase"
  )

  let hasNumericCharacters = confirm(
    "click OK to confirm including numberic characters"
  )

  let hasLowerCasedcharacters =confirm(
     "click OK to confirm including lowercase characters"
  )

  let hasUppercasecharacters = confirm(
    "click OK to confirm inulding uppercase character"
  )
 
  if(haslowerCasedcharacters === false &&
     hasuppercasecharacter === false &&
     hasSpecialCharacters === false &&
     hasNumerCharacters === false) {
       alert (`Must selct at least one character type`)
       return;
    }

    let getPasswordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasUppercasecharacters: hasUppercasecharacters,
      hasLowerCasedcharacters: hasLowerCasedcharacters,
      hasNumericCharacters: hasNumericCharacters
    }

    console.log(getPasswordOptions);


    return getPasswordOptions;

}

// Function for getting a random element from an array
function getRandom(arr){
  let randomIndexn = Math.floor(Maths.random() * arr.length)
  let randomElement = arr[randomIndexn];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);

  let result = []



  let possibleCharacter = []



  let guaranteedCharacter = []


  if ( options["hasSpecialCharacter"]) {
    possibleCharacter = possibleCharacter. concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))

  }

  if (options["hasLowerCasecharacter"]) {
     possibleCharacter = possibleCharacter. concat(lowerCasedCharacters);
     guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasUppercasecharacters) {
     possibleCharacter = possibleCharacter. concat(upperCasedCharacters);
     guaranteedCharacter.push(getRandom(upperCasedCharacters))

  }
  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter. concat(numericCharacters);
     guaranteedCharacter.push(getRandom(numericCharacters))

  }

  console.log(possibleCharacter);

  for(let index = 0; index < optionsl; index++) {
    let possibleCharacter = getRandom( possibleCharacter);
    console.log(possibleCharacter);
    
    result.push(possibleCharacter);

  }
  
  console.log(result);
 

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