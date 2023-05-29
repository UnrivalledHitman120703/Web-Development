let button = document.getElementById("enter");
let input = document.getElementById("input");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event){
    if(inputLength() > 0 && event.key === 'Enter'){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);