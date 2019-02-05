function FizzBuzz() {
};

FizzBuzz.prototype.numbers = function(number) {
    if (number %15===0){return "fizzbuzz";}
    if (number %5===0) {return "buzz";}
    if (number%3===0) {return "fizz";}
    return number;
};

let fizzBuzz = new FizzBuzz();

for (var i = 1; i<=100; i++) {
  console.log(fizzBuzz.numbers(i));
};
