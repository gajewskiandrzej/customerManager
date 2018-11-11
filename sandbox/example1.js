console.log("Hello world!");
var x = 3;
var y;
var z;
y = "napis";
z = true;
z = false;
var xs = [1, 2, 3, 4, 5];
console.log(xs.length);
var ys;
var zs = [1, 4, 8].concat(xs);
console.log(zs);
var g = "aaa";
var gg = 'bbb';
var ggg = "Liczba x = " + x;
console.log("tablica xs " + xs[1] + ", " + zs[0]);
console.log(ggg);
function welcome() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return "Welcome " + names.join(", ");
}
welcome("Andrju");
console.log(welcome("Endrju", "Jasiu"));
