// am implementing a search filter where I loop thru json object so that I can type firstname and
// get details of a user displayed. But that is filtering with respect to firstname only.
// What if I need to filter either by FIRSTNAME OR LASTNAME??? so even if I enter the lastname,
// I need to see the details of the user.

const persons: any[] = [
    { 'id': 1, 'firstname': 'Max', 'name': 'Dichtertje' },
    { 'id': 2, 'firstname': 'Herbert', 'name': 'De uitvreter' },
    { 'id': 3, 'firstname': 'Todd', 'name': 'Titaantjes' }
];

let searchTerm = 'Max';
let result = persons.filter(
    person => person.firstname === searchTerm || person.name === searchTerm);
console.log('result for searchterm (Max)', result);
searchTerm = 'Titaantjes';
result = persons.filter(
    person => person.firstname === searchTerm || person.name === searchTerm);
console.log('result for searchterm (Titaantjes)', result);



