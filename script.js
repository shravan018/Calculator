const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

const handleButtonClick = (e) => {
    if (e.target.innerHTML === '=') {
        string = eval(string);
        input.value = string;
    } else if (e.target.innerHTML === 'AC') {
        string = "";
        input.value = string;
    } else if (e.target.innerHTML === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += e.target.innerHTML;
        input.value = string;
    }
};

const arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});