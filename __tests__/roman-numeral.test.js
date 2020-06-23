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
});