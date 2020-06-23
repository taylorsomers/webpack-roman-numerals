import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import {translator} from './../src/roman-numeral.js';

$(document).ready(function() {
  $("#numberForm").submit(function() {
    event.preventDefault();
    const input = $("#number").val();
    const output = translator(input);
    $("p.output").text(output);
  });
});