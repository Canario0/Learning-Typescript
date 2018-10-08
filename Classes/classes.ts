//The diferences between interfaces and classes (both are objects blueprints) is that classes are meant to be constructed
// in other words to have instances of the class.
class Stark{

    //Members in a class cant be optional.
    name: String;
    saying: String;
    //Satitic property
    static castle : String = "winterfell";

    constructor(){
        this.saying = "Winterfell!";
    }

    hello(person: String){
        console.log("Hello "+ person);
    }
}


var ned = new Stark();
ned.saying= "Winter is comming";
console.log(Stark.castle);
ned.hello("Robert")
