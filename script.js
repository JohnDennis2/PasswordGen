// Assignment code here


//pseudo code section
//



// Get references to the #generate element


var generateBtn = document.querySelector("generate");

// Write password to the #password input



const numbers = "1,2,3,4,5,6,7,8,9"
const special =  "~`! @#$%^&*()-_+={}[]|;:"
const upperLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
const lowerLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"



let chooseSpecial = confirm("Would you like a special character?")
let choosenumbers = confirm("Would you like to choose a number?")
let chooseUpperLetters = confirm("Would you like an uppercase letter?")
let chooseLowerLetters = confirm("Would you like a lowercase letter?")



function writePassword() {





Passwordlength = 8
 Passwordlength = (i = 0; i <= 8 ; i++)


  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);

  


passwordInput = Math.floor(Math.random()*Passwordlength);


if (chooseSpecial) {
  choosenumbers
}

choosenumbers
if {
    chooseUpperLetters
}

chooseUpperLetters {

chooseLowerLetters

}
chooseLowerLetters {


}


const ChoicesArray = [ {chooseLowerLetters} , {chooseUpperLetters}, {chooseSpecial}, {choosenumbers}]


passwordInput = Math.floor(Math.random()*Passwordlength);

  var passwordText = document.querySelector(numbers,special,upperLetters,lowerLetters);

  passwordText.value = password;

  var password = generatePassword();

  return;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

