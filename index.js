// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendtodisplay(input){
    display.value +=input;
}
    


display.value +=input;


function clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        display.value =eval(display.value);
    }
 catch(error){
    display.value ="error"
 }
}