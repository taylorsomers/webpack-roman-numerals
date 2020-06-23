import {translator} from './../src/roman-numeral.js';

describe ('translator', () => {

  test ('should return an error message if a number is not between 1-3999', () => {
    const testOutput = translator(4000);
    expect (testOutput).toEqual("Please enter a number between 1-3999");
  });
});