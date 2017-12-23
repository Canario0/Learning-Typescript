//This will compile without error
var n = 1;
//We can u se type any , to mach any tipe.
var b;
b = 'Rob';
b = 123;
//This will throw Type '"Rob"' is not assignable to type 'Number'
//but it will compile, since it is not an critical error
//n = 'Rob';
//Some boolean test
var iswinter = false;
//Error
//iswinter = 1;
//Arrays
var names = ["Jon", "Rickon"];
//Multitype array
var names2 = ["Jon", "Rickon", 5];
//enum
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
var cat = Starks.Catlyn;
console.log(cat);
