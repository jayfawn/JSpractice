describe("fizzBuzz", function() {
  it("Will say fizz if the number can be divided from 3", function() {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
  it("Will say buzz if the number can be divided from 5", function() {
    expect(fizzbuzz(5)).toEqual("buzz");
  });
  it("Will say fizzbuzz if the number can be divided from 5 and 3", function() {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});
