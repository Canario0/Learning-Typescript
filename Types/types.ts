
//This will compile without error
var n : Number =1;
//We can use type any , to mach any tipe.
var b : any;
b = 'Rob';
b = 123;

//This will throw Type '"Rob"' is not assignable to type 'Number'
//but it will compile, since it is not an critical error
//n = 'Rob';



//Some boolean test
var iswinter : boolean = false;

//Error
//iswinter = 1;

//Arrays
var names : String []= ["Jon", "Rickon"];

//Multitype array

var names2 : any[]= ["Jon", "Rickon", 5];

//enum, their values are Jon=0, Bran=1...
enum Starks {Jon,Bran,Eddard,Catlyn};

var cat : Starks= Starks.Catlyn;

console.log(cat);
