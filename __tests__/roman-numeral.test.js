import {translator} from './../src/roman-numeral.js';

describe ('translator', () => {

  test ("should return an error message if a number is not between 1-3999", () => {
    const testInput = translator("4000");
    expect (testInput).toEqual("Please enter a number between 1-3999");
  });

  test ("An entered number is converted into it's corresponding symbol", () => {
    const testInput = translator("10");
    expect (testInput).toEqual("X");
  });

  test ("the entered number will equal the sum of all symbols", () => {
    const testInput = translator("60");
    expect (testInput).toEqual("LX");
  });

  test ("Symbols are displayed largest to smallest", () => {
    const testInput = translator("1111");
    expect (testInput).toEqual("MCXI");
  });

  test ("if the sum of all symbols requires more than 3 consecutive cases of the same symbol, use subtraction to reach the sum of consecutive values", () => {
    const testInput = translator("4");
    expect (testInput).toEqual("IV");
  });
});