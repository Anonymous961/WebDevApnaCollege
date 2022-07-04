let bread1 = prompt("which bread would you like to have :-");
let sauce1 = prompt("which sauce would you like ot have:-");
let veggies1 = prompt("what are your favorite veggies");

function makeSandwich(bread,veggies,sauce){
    let sandwich=bread + " bread "+ veggies + " "+ sauce + " sandwich";
    return sandwich;
}

let vegSandwich =makeSandwich(bread1,veggies1,sauce1);
console.log(vegSandwich);