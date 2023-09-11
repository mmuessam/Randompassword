const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const onlyCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const charactersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const characterSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")


const Generate = document.getElementById("Generate-passwords")

const clear = document.getElementById("Clear")
password2.textContent = ''
password1.textContent = ''

Generate.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    // let randomIndexOne = Math.floor( Math.random() * 15 )
    // let randomIndexTwo = Math.floor( Math.random() * 15 )
    // console.log(allCharacters[randomIndexOne] + " vs " + allCharacters[randomIndexTwo])
    // password2.textContent = allCharacters[randomIndexOne]
    renderPasswords();
 
})


function renderPasswords(){
    password1.textContent = '';
    password2.textContent = '';
    for (let i = 0; i < 15; i++) {

      
        let randomIndexOne = Math.floor( Math.random() * allCharacters.length )
        let randomIndexTwo = Math.floor( Math.random() * allCharacters.length )
        password2.textContent += allCharacters[randomIndexOne]
        password1.textContent += allCharacters[randomIndexTwo]



        // let randomPassword1 = Math.floor(Math.random() * characters.length);
        // let randomPassword2 = Math.floor(Math.random() * characters.length);
    
        // password1El.textContent += characters[randomPassword1];
        // password2El.textContent += characters[randomPassword2];
      }
}

clear.addEventListener("click" , function() {

    password2.textContent = ''
    password1.textContent = ''
    
})


password2.addEventListener("click" , function() {
    if (password2.textContent === '') {
        alert("No password has been generated yet");
    }
    else{
        const textRange = document.createRange();
        textRange.selectNode(password2);
        
        // تحديد النص المختار
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(textRange);
        
        // نسخ النص إلى الحافظة
        document.execCommand("copy");
        
        // إلغاء تحديد النص وإخفاء التأكيد
        selection.removeAllRanges();
        alert("Text copied: " + password2.innerText);
    }
   
  
})

password1.addEventListener("click" , function() {
    if (password1.textContent === '') {
        alert("No password has been generated yet");
    }
    else{
        const textRange = document.createRange();
        textRange.selectNode(password1);
        
        // تحديد النص المختار
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(textRange);
        
        // نسخ النص إلى الحافظة
        document.execCommand("copy");
        
        // إلغاء تحديد النص وإخفاء التأكيد
        selection.removeAllRanges();
        alert("Text copied: " + password1.innerText);
    }
   
  
})


