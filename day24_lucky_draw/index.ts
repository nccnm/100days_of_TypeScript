import $ = require('jquery');
import _ = require('lodash');

import Person from './Person';

const URL = 'http://localhost:3000/persons';
let _persons: Person[];

$.getJSON(URL).then((persons: Person[]) => {
    let template = '';

    _persons = persons;

    persons.forEach((person: Person) => {
        template += `
            <tr>
                <th scope='row'>${person.id}</th>
                <td>${person.name}</td>
                <td>${person.email}</td>
            </tr>    
        `;
    });

    $('tbody').html(template);
});


$('#pickWiner').on('click', () => {
    const winner = _.sample<Person>(_persons) as Person;

    $("#winner").text(`Winner is ${winner.name} - ${winner.email}`);
});