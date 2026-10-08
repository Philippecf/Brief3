const inputTag = document.querySelector('input');
const buttonTag = document.querySelector('button');
const listTag = document.querySelector('ul');


/*console.log("inputTag")
console.log("buttonTag")
console.log("listTag")*/


buttonTag.addEventListener("click", function(){
/*console.log("Button waz clicked !");
console.log(inputTag.value);*/
const newList= document.createElement ('li');
newList.innerText= inputTag.value;
listTag.appendChild(newList);
});





