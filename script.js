let button = document.querySelector(".enter");
let input = document.querySelector(".usr_input");
let ul = document.querySelector(".item_list");

const createListElement = () => {
    // create list and button elements
    let li = document.createElement("li");
    let deleteButt = document.createElement("button");
    // add text nodes to li with input from user and to button with X
    li.appendChild(document.createTextNode(input.value));
    deleteButt.appendChild(document.createTextNode("X"));
    deleteButt.classList.add("delete");
    // append button to li as a child and append whole li to ul
    li.appendChild(deleteButt);
    ul.appendChild(li);
    input.value = '';

    li.addEventListener('click', () => {
        li.classList.toggle('done');
    })
    deleteButt.addEventListener('click', () => {
        li.remove();
    })
}
const createElementOnClick = () => {
    createListElement();
}
const createElementOnKeypress = (event) => {
    if(event.code === "Enter"){
        createListElement();
    }
}
button.addEventListener("click", createElementOnClick);
input.addEventListener("keypress", createElementOnKeypress);