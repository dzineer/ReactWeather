
var names = [
  'Frank',
  'Jade',
  'Frankie'
];

/*
names.forEach(function (name) {
  console.log( 'forEach', name );
});

names.forEach( (name) => {
  console.log( 'arrowFunc', name );
});

names.forEach( (name) => console.log( 'arrowFunc', name ) );
*/

// arrow functions
// uses parents this binding
/*
var returnMe = (name) => name + '!';
console.log( returnMe('Frank') );
*/

var person = {
  name: 'Frank',
  greet: function() {
    names.forEach( (name) => {
      console.log(  this.name + ' says hi to ' + name );
    })
  }
};

person.greet();

// challenge area
function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
  return a + b;
}

// addExpression
var addExpression = (a, b) => a + b;

console.log( addStatement(5, 6) );
console.log( addExpression(1,4) );
