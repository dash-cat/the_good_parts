var add_the_handlers = function (nodes) {
  var i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function (e) {
      alert(i);
    };
  }
};
// END BAD EXAMPLE

var fibonacci = (function () {
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if (typeof result !== "number") {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();


 var m = ['aa', 'bb', 'a', 4, 8, 15,16,23,42]

 console.log(m.sort((a,b) => {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1
    }
    return typeof a < typeof b ? -1 : 1

 }))

 var by = function () {
    return function (o, p) {
        var a,b;
        if(typeof o === 'object' && typeof p === 'object') 
    }
 }