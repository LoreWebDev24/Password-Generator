// MY FUNCTIONS : 

function syncCharacterAmount (e) {
    const value = e.target.value;
    charAmountRange.value = value ;
    charAmountNumber.value = value ;
}

function generatePassword(charAmount) {
   do {
        index = Math.round(Math.random() * 94);
        console.log(index);
        paswordGenerating += arrayEmailChars[index];
        console.log(paswordGenerating.length, charAmount);
    }
    while (paswordGenerating.length <= charAmount - 1);

    return paswordGenerating;
}

// DOMS ELEMENTS 

const charAmountRange = document.getElementById('charAmountRange');

const charAmountNumber = document.getElementById('charAmountNumber');

const form = document.getElementById('passwordGeneratorForm');

const passwordDisplay = document.getElementById('passwordDisplay');

// ARRAYS AND VARIABLES

const arrayEmailChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

console.log(arrayEmailChars);

let paswordGenerating = '';

// EVENT LISTEENRS:

charAmountRange.addEventListener('input', syncCharacterAmount);
charAmountNumber.addEventListener('input', syncCharacterAmount);


form.addEventListener('submit', e => {
    e.preventDefault()
    const charAmount = parseInt(charAmountNumber.value);
    paswordGenerating = '';
    const password = generatePassword(charAmount);
    passwordDisplay.innerText = password;
})






