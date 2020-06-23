//converts integer into roman numberal notation array
function arrayBuilder(string){
  let array = [];
  let int = parseInt(string);

  if (int === 9) {
    array.push("1", "10");
  } else if (int >= 5) {
    array.push("5");
    let intLength = int - 5;
    while (intLength > 0){
      array.push("1");
      intLength -= 1;
    }
  } else if (int === 4){
    array.push("1", "5");
  } else if (int < 4) {
    let intLength = int;
    while (intLength > 0){
      array.push("1");
      intLength -= 1;
    }
  }
  return array;
}

//converts array of integers into roman numeral values
function converter(array){
  let newArray = [];
  for (const element of array){
    if (element === "1000"){
      newArray.push("M");
    } else if (element === "500"){
      newArray.push("D");
    } else if (element === "100"){
      newArray.push("C");
    } else if (element === "50"){
      newArray.push("L");
    } else if (element === "10"){
      newArray.push("X");
    } else if (element === "5"){
      newArray.push("V");
    } else if (element === "1"){
      newArray.push("I");
    }
  }
  return newArray;
}

//translates integer into roman numerals
export function translator(int) {
  let onesArray = [];
  let tensArray = [];
  let hundredsArray = [];
  let thousandsArray = [];
  let posCount = 0;
  let output = "";

  if (isError(int) === false){
    for (let i=int.length - 1; i >= 0; i--){
      if (posCount === 0) {
        onesArray = arrayBuilder(int[i]);
      } else if (posCount === 1) {
        for (const element of arrayBuilder(int[i])){
          tensArray.push(element + "0");
        }
      } else if (posCount === 2) {
        for (const element of arrayBuilder(int[i])){
          hundredsArray.push(element + "00");
        }
      } else if (posCount === 3) {
        for (const element of arrayBuilder(int[i])){
          thousandsArray.push(element + "000");
        }
      }
      posCount += 1;
    }
    output = (converter(thousandsArray).concat(converter(hundredsArray), converter(tensArray), converter(onesArray))).join("");
  } else {
    output = "Please enter a number between 1-3999";
  }
  return output;
}

//error handling
function isError(int) {
  if (int > 3999 || int < 1) {
    return true;
  } else {
    return false;
  }
}