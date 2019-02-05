describe("FizzBuzz", function() {

  let fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  }
);

  it("Will say fizz if the number can be divided from 3", function() {
    expect(fizzBuzz.numbers(3)).toEqual("fizz");
  });
  it("Will say buzz if the number can be divided from 5", function() {
    expect(fizzBuzz.numbers(5)).toEqual("buzz");
  });
  it("Will say fizzbuzz if the number can be divided from 5 and 3", function() {
    expect(fizzBuzz.numbers(15)).toEqual("fizzbuzz");
  });
  it("Will return the number if is not divisible by 3 or 5", function() {
    expect(fizzBuzz.numbers(1)).toEqual(1);
  });
});
