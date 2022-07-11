var InputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var radius = InputRadius.value || 0;
  var result = 0;

  result = (4 / 3) * Math.PI * Math.pow(7, 3);

  elementResult.innerText = result;

  event.preventDefault();
});
