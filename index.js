let fibonacciNumber = document.getElementById("fibonacciNumber");
let x = document.getElementById("userNum");
let btn = document.querySelector("#btn");
let spinner = document.getElementById("spinner");
let serverError = document.getElementById("serverError");
let resultsHistory = document.getElementById("resultsHistory");
let saveCalc = document.getElementById("saveCalc");

btn.addEventListener("click", () => {
  if (saveCalc.checked) {
    fetchUrl();
  } else {
    //   localFibonacci(x.value);
    showLocalFibonacci();
  }
});

function localFibonacci(num) {
  if (num <= 1) return num;
  return localFibonacci(num - 2) + localFibonacci(num - 1);
}

function showLocalFibonacci() {
  if (x.value <= 50) {
    let result = localFibonacci(x.value);
    fibonacciNumber.innerHTML = result;
  } else {
    return false;
  }
}

function fetchUrl() {
  if (x.value <= 50 && x.value > 0) {
    spinner.style.visibility = "visible";
    error.style.visibility = "hidden";
    serverError.style.visibility = "hidden";

    const Fibonacci_URL = `http://localhost:5050/fibonacci/${x.value}`;
    fetch(Fibonacci_URL)
      .then((response) => response.json())
      .then((data) => {
        spinner.style.visibility = "hidden";
        fibonacciNumber.innerHTML = data.result;
        fibonacciNumber.style.visibility = "visible";
        fetchUrlRes();
      });
  } else {
    spinner.style.visibility = "hidden";

    function errorMessage() {
      const error = document.getElementById("error");
      serverError.style.visibility = "hidden";
      error.innerHTML = "Can't be larger than 50";
      error.style.visibility = "visible";
      fibonacciNumber.style.visibility = "hidden";
    }
    errorMessage();
  }
}

function fetchUrlRes() {
  const Fibonacci_URL_Results = `http://localhost:5050/getFibonacciResults`;
  fetch(Fibonacci_URL_Results)
    .then((response) => response.json())
    .then((data) => {
      let elements = "";
      for (let retrivingData of data.results) {
        elements += `<li class="border-bottom p-3 ms-1">The Ficonacci of <b>${
          retrivingData.number
        }</b> is <b>${retrivingData.result}</b>. Calculated at:${new Date(
          retrivingData.createdDate
        )}</li>`;
      }
      resultsHistory.innerHTML += elements;
    });
}

window.onload = function loading() {
  fetchUrlRes();
};
