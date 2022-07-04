let animal={
    name : "zebra",
    leg : 4
};

for(let key in animal){
    console.log(key, animal[key]);
}

console.log(animal["zebra"])

//array
let names=["rahul","neha","aman","rishab"];
for(let index in names){
    console.log(index,names[index]);
}

for(let name of names){
    console.log(name);
}