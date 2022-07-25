var number = prompt('Introdu un numar:');

for (var i = 5; i <= 100; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`cest numar este multiplu de ${number}.`);
}
