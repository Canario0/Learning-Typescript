
//This will compile without error
var n : Number =1;
//We can u se type any , to mach any tipe.
var b : any;
b = 'Rob';
b = 123;

//This will throw Type '"Rob"' is not assignable to type 'Number'
//but it will compile, since it is not an critical error
//n = 'Rob';