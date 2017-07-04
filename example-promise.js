/*
function getTempCallBack(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack('Thailand', function(err, temp) {
  if( err ) {
    console.log( 'error', err );
  }
  else {
    console.log( 'success', temp );
  }
});
*/

// challenge area
function addPromise( a ,b ) {
  return new Promise( function( resolve, reject ) {
    if( typeof a === "number" && typeof b === "number" ) {
      resolve( a + b );
    }
    else {
      reject('invalid arguments');
    }
  });
}

addPromise(1, 3).then( function( answer ) {
  console.log( 'promise success', answer );
}, function(err) {
  console.log( 'promise error', err );
});

addPromise(1, 'a').then( function( answer ) {
  console.log( 'promise success', answer );
}, function(err) {
  console.log( 'promise error', err );
});
