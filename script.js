// Assignment code here


//pseudo code section

//as the user when I naviagte to the site,
//I select the generate button.
//a promt displays asking the length of the password
//i choose a length between 8-128 chracters only
//then a promt asking if would like to choose a number
//i choose a number
//then im ask if I would like an Uppercase letter
//i choose and uppercae lettr
//then im ask if i would like a lowercase letter
//I choose a lowercase letter
//then im ask if i would  like a speacial charatcer
//then i choose a special character
//after my choices are made then they are validated
//after validation then the password should be generated
//after the password is generated then it should be displayed to the user in an alert



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const numbers = [1,2,3,4,5,6,7,8,9]
const special =  [",~,`,!, @,#,$,%,^,&,*,(,)-,_,+,=,{,},[,],|,;,:,"]
const upperLetters = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
const lowerLetters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"] 


// Write password to the #password input

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;


function generatePassword() { 

  const passWordLength = function howlong() {
    
        passLength = prompt("Please choose a password length")
 
if { 
    charcNum = (8 > || < 128)
         

    }
    


    for (i=0; i < 128 || > 8, i++)
console.log( passWordLength)

  }

let chooseSpecial = confirm("Would you like a special character?",)
let choosenumbers = confirm("Would you like to a number?",)
let chooseUpperLetters = confirm("Would you like an uppercase letter?",)
let chooseLowerLetters = confirm("Would you like a lowercase letter?",)



  

  }
  




return password;

}

// Add event listener to generate button


}

generateBtn.addEventListener("onClick", writePassword);

generatePassword()
writePassword()

