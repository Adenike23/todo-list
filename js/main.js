const todayDate = new Date().toString().split(' ').slice(1,4).join(' ')
document.querySelector('.date p').textContent = todayDate;
const input = document.querySelector('input');
const error = document.querySelector('.error');
const button = document.querySelector('button');
const ul = document.querySelector('ul')
// getting the item from the localStorage and saving it into a variable. Initialize an empty array if no item is found in the localStorage
let todoItemsArray =JSON.parse(localStorage.getItem('todoItems'))  ||  [] 

button.addEventListener('click', function() {
    if (input.value.length <= 0) {
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none'
        }, 3000);
    } else {
        let usersInput = input.value
        todoItemsArray.push(usersInput)
        localStorage.setItem('todoItems', JSON.stringify(todoItemsArray))
        ul.innerHTML += `<li>${usersInput}</li>`
        input.value = ''
        // if any li tag is found on the html, display the button
        let liElements = document.querySelector('li')
        if (liElements) {
            document.querySelector('.clear').style.display = 'block'
        }
    } 
})

// loops through the items in the localStorage and adds them to the UI
todoItemsArray.forEach(todo => {
    let li = document.createElement('li')
    li.textContent = todo
    ul.appendChild(li)
})

if (todoItemsArray.length > 0) {
    document.querySelector('.clear').style.display = 'block'
}

document.querySelector('.clear').addEventListener('click', function() {
    localStorage.clear();
    location.reload()
})