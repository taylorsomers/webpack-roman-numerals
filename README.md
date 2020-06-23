# Roman Numeral Converter

  ### By Taylor Somers & Tyson Lackey

## Description

  This is a comprehensive reorganization of a program produced earlier, reformatted for use with WebPack functionality. The UI is essentially the same as the initial program, created with HTML, but the business logic and UI logic have been entirely separated into their own files and the entire range of commonly used plugins has been added. The program uses JavaScript and jQuery to produce a converter that takes inputted integers and converts them to Roman Numerals.

## Languages & Technologies Used:

  ### Programming Languages & Libraries
  * HTML
  * JavaScript
  * jQuery
  * Node
  * WebPack

  ### Operating Systems & Programs
  * Brave
  * Git Bash
  * Google Chrome
  * Microsoft Windows 10
  * Visual Studio Code

## Installation

  1.  Download a web browser, such as Apple Safari, Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2.  Navigate to https://github.com/taylorsomers/webpack-roman-numerals.
  3.  Click the green "Clone or download" button at the right of the screen.
  4.  Select "Download ZIP."
  5.  Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6.  Open the directory containing the extracted files.
  7.  Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
  8.  Enter the command "$ npm install" in the terminal and press "Enter".
  9.  Enter the command "$ npm run build" in the terminal and press "Enter".
  10. Enter the command "$ npm run start" in the terminal and press "Enter".
  11. The program should open and run with its user interface accessible in your default web browser.

## Specifications

  | Program Behavior | Example Behavior | Example Output |
  | ----------- | ----------- | ----------- |
  | If a non-integer is entered, return an error | "325hello" | "enter a number between 1-3999" |
  | Entered numbers must be between 1-3999 | "4000" | "enter a number between 1-3999" |
  | An entered number is converted into it's corresponding symbol | "10" | "X" |
  | the entered number will equal the sum of all symbols | "60" | "LX" |
  | Symbols are displayed largest to smallest | "1111" | "MCXI" |
  | if the sum of all symbols requires more than 3 consecutive cases of the same symbol, use subtraction to reach the sum of consecutive values. | "4" | "IV" |
  | ones, tens, hundreds, and thousands need to evaulate separately. | "99" | "XCIX" (not: "IC") |
  

## Known Bugs

  * No known bugs at this time. If any are discovered, please feel free to reach out and let me know. If you would like to contribute any fixes or improvements, please do!

### Contributors

  * Taylor Somers
  * Tyson Lackey

### License

This website is licensed under the GNU General Public License GPLv3. (C) 2020 Taylor Somers, Tyson Lackey. All rights reserved.