//The diferences between interfaces and classes (both are objects blueprints) is that classes are meant to be constructed
// in other words to have instances of the class.
var Stark = /** @class */ (function () {
    function Stark() {
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    //Satitic property
    Stark.castle = "winterfell";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is comming";
console.log(Stark.castle);
ned.hello("Robert");
