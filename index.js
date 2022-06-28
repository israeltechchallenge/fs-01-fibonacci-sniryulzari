let fibonacciNumber = document.getElementById('fibonacciNumber');
let x = document.getElementById("userNum");
let btn = document.querySelector('#btn');
let spinner = document.getElementById("spinner");
let error42 = document.getElementById("error42");


btn.addEventListener('click', function fetchUrl(){
    if (x.value <= 50) {
    spinner.style.visibility = 'visible';
    error.style.visibility = 'hidden';
    error42.style.visibility = 'hidden';
    const Fibonacci_URL = `http://localhost:5050/fibonacci/${x.value}`;
    fetch(Fibonacci_URL)
        .then(response => response.json())
        .then(data => { 
        spinner.style.visibility = 'hidden';
        fibonacciNumber.innerHTML = data.result;
        fibonacciNumber.style.visibility = 'visible';
    })
    .catch(err => {
        console.error(err);
        error42.innerHTML = "Server Error: 42 is the meaning of life";
        error42.style.visibility = 'visible';
        spinner.style.visibility = 'hidden';
        fibonacciNumber.style.visibility = 'hidden';
    })
}   else {
    spinner.style.visibility = 'hidden';

    function errorMessage() {
        const error = document.getElementById("error");
        error42.style.visibility = 'hidden';
        error.innerHTML = "Can't be larger than 50";
        error.style.visibility = 'visible';
        fibonacciNumber.style.visibility = 'hidden';
    }
    errorMessage();
}
})





