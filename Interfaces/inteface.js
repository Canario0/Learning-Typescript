function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
//Will throw an error since label is not defined in Stark interface
//printName({label:"Joes"}); 
