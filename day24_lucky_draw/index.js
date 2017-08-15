"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var _ = require("lodash");
var URL = 'http://localhost:3000/persons';
var _persons;
$.getJSON(URL).then(function (persons) {
    var template = '';
    _persons = persons;
    persons.forEach(function (person) {
        template += "\n            <tr>\n                <th scope='row'>" + person.id + "</th>\n                <td>" + person.name + "</td>\n                <td>" + person.email + "</td>\n            </tr>    \n        ";
    });
    $('tbody').html(template);
});
$('#pickWiner').on('click', function () {
    var winner = _.sample(_persons);
    $("#winner").text("Winner is " + winner.name + " - " + winner.email);
});
