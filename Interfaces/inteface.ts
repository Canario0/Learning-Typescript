interface Stark{
    name: String;
    //? opeartor makes age parameter optional
    age?: number;
}



function printName(stark : Stark){
    console.log(stark.name);
}

printName({name : "Eddard"});

//Will throw an error since label is not defined in Stark interface
//printName({label:"Joes"});