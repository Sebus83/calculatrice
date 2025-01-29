
let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            display.value = '';
        } else if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erreur';
            }
        } else {
            display.value += button.textContent;
        }
    })
})
