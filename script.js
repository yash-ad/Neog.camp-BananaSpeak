/* let btnTranslate = document.querySelector("#Btn-translate");  //Dom queryselector

btnTranslate.addEventListener("click", function clickAble () 
{
console.log("Clicked");






}) */

let btnTranslate = document.querySelector("#Btn-translate");

function clickable()
{

console.log("Clicked");


}
//concept of callbacks in javascript

btnTranslate.addEventListener("click", clickable);