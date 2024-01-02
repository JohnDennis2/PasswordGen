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

generateBtn.addEventListener("onClick", writePassword);
var generateBtn = document.querySelector("#generate");

const numbers = [1,2,3,4,5,6,7,8,9]
const special =  [",~,`,!, @,#,$,%,^,&,*,(,)-,_,+,=,{,},[,],|,;,:,"]
const upperLetters = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
const lowerLetters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"] 
 const numbersChoice = confirm("Do you want numbers?")
 const specialCharchoise = confirm("Do you want special characters?") 
 const upperCharchoice = confirm("Do you want upper letters?")
 const lowerCharchoice = confirm("Do you want lower letters?")
// Write password to the #password input

function writePassword() {

  var password = generatePassword();



  }
      


generatePassword()
writePassword()

