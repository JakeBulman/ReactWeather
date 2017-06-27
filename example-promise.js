// function getTempCallback (location, callback) {
//   callback(undefined, 70);
//   callback('City not found');
// }
//
// getTempCallback('London, UK', function(err, temp){
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// })
//


// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     resolve(78);
//     reject('City not found');
//   })
// }
//
// getTempPromise('London').then(function (temp){
//
// }, function (err){
//
// })

if (typeof num === 'number') {

}

function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Error ffs');
    }
  });
}

addPromise(1, 2).then(function(sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
})

addPromise('A', 2).then(function(sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
})
