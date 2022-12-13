/* let btnTranslate = document.querySelector("#Btn-translate");  //Dom queryselector

btnTranslate.addEventListener("click", function clickAble () 
{
console.log("Clicked");






}) */

/* <!--Input and Output Area--> */

let btnTranslate = document.querySelector("#Btn-translate");
let txtinput = document.querySelector("#txtInput");                //Input
var txtoutput = document.querySelector("#txtOutput");               //Output
let minionLanguage = " Tulaliloo ti amo ";           





function clickbutton()
{
txtoutput.innerText = txtinput.value + " Translated into : " + "" + minionLanguage;

}


//concept of callbacks in javascript

btnTranslate.addEventListener("click", clickbutton);