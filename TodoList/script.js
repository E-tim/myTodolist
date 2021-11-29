let input = document.getElementById('my-input');
let button = document.getElementById('btn')

let ul = document.getElementById('myUl');
let span = document.getElementById('mySpan')
let count = 0;

const myInput = () => {
    return input.value.length;
}

function newElement() {
    let li = document.createElement('LI');
    let val = document.createTextNode(input.value);
    li.appendChild(val);
    ul.appendChild(li);
    input.value = '';

    const lengthofTodo = () => {
        let arr = [li];
        span.innerHTML = arr.length;
    }

    


    // create a checkbox to mark
    const checkBox = document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    li.appendChild(checkBox);
    checkBox.addEventListener('click', function(){
        li.classList.toggle('done');
    }) 

    // create a delete button 
    const fontAwesome = document.createElement('I');
    fontAwesome.setAttribute('class', 'fas fa-trash-alt')
    li.appendChild(fontAwesome);
    fontAwesome.addEventListener('click', function(event){
        event.target.parentNode.remove();
    })
}

function myButton() {
    {

        if (myInput()) {
            newElement();
        } else {
            alert('Write Something')
        }
    }
}

function kPress(event) {
    if (myInput() && event.keyCode === 13) {
        newElement();
    } 
}

button.addEventListener("click", myButton);

input.addEventListener("keypress", kPress);





