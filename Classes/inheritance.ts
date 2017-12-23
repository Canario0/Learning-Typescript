
class Person {
    name : String;
    constructor(name:string){
        this.name= name;
    }
    
    dance(){
        console.log(this.name + " is dancing");
    }
}


class AwesomePerson extends Person{
    dance(){
        super.dance();
        console.log("So AWSOME!");
    }
}

var bran = new Person("Bran");
bran.dance();
var rob = new AwesomePerson("Rob");
rob.dance();