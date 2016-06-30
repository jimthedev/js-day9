var helloContainer = document.querySelector(".hello-container");
var helloElement = helloContainer.querySelector('hello');

console.log(helloElement);

// if(matches.length > 0) {
//   // there are actually elements matching the
//   // selectors
//   console.log(matches); // Browser shows you 'objects'
//   matches.forEach(function(el){
//     console.log(el); // Browser shows you 'html'
//   });
//   var values = matches.values(); // iterator

// } else {
//   // I didn't find anything matching those
//   // selectors
//   console.log('Nothing found');
// }