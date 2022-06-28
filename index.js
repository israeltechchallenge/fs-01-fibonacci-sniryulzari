let fibonacciNumber = document.getElementById('fibonacciNumber');
let x = document.getElementById("userNum");
let btn = document.querySelector('#btn');
let spinner = document.getElementById("spinner");
let error42 = document.getElementById("error42");
let resultsHistory = document.getElementById("resultsHistory");


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
        fetchUrlRes();//milestone 6
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
function fetchUrlRes(){
const Fibonacci_URL_Results = `http://localhost:5050/getFibonacciResults`;
    fetch(Fibonacci_URL_Results)
        .then(response => response.json())
        .then(data => { 
        let elements = '';
        for (let retrivingData of data.results) {
        elements += `<li class="border-bottom p-3 ms-1">The Ficonacci of <b>${retrivingData.number}</b> is <b>${retrivingData.result}</b>. Calculated at:${new Date(retrivingData.createdDate)}</li>`}
        resultsHistory.innerHTML += elements;})

    }
window.onload = function loading(){
    fetchUrlRes();
}; 


