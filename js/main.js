const todayDate = new Date().toString().split(' ').slice(1,4).join(' ')
document.querySelector('.date p').textContent = todayDate;
console.log(new Date().toString().split(' ').slice(1,4).joi);
const input = document.querySelector('input');
const error = document.querySelector('.error');
const button = document.querySelector('button');
const ul = document.querySelector('ul')

button.addEventListener('click', function() {
    if (input.value.length <= 0) {
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none'
        }, 3000);
    } else {
        let usersInput = input.value
        ul.innerHTML += `<li>${usersInput}</li>`
        input.value = ''
    } 
})

