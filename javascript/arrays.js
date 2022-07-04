const aa=[1,2,3,4,5,65,6];
const arr=new Array(1,2,3,4,5,6,7,8);

//push
aa.push(69);

//unshift
aa.unshift(2);

//pop
aa.pop()  

//shift
aa.shift()

const names=['anil','aaaa','bbbbb']
console.log(names.indexOf('anil'))

//lastoccurance
console.log(names.lastIndexOf('anil'))
console.log(names.includes('anil'))
console.log(aa[aa.length-1])

let channels=[{
    name:'anil',
    subscriber:10000
},
{
    name:'aaaa',
    subscriber:20000
},
{
    name:'aabb',
    subscriber:30000
},
{
    name:'abcd',
    subscriber:40000
}
]
console.log(channels.find(function(element){
    return element.subscriber===30000
}));
console.log(channels.find((element)=>{
    return element.name==='abcd'
}));

let names1=['anil','terabaap','bhak']
let names2=['safa','fuahf','faefaef']

console.log(names1.concat('helllo'));
// let names3=names1.concat(names2 ) 
let names3=[...names1,...names2]
console.log(names3)
console.log(names3.slice(2,6))


for (let i=0;i<names3.length;i++){
    console.log(names3[i]);
}
//for of loop
for(let i in names3){
    console.log(i+' '+names3[i]);
}
for(let i of names3){
    console.log(i);
}

//for-each
names3.forEach(function(name,index){
    console.log(name,index);
})

//join
let student=['A','n','i','l']
student=student.join('*')
console.log(student)

//split
student=student.split('*')
console.log(student)

let cities=[
    {name: "mumbai",population: 12414125},
    {name: "Delhi",population: 1241322345},
    {name: "Bangalore",population: 414125},
    {name: "Chennai",population: 113125},
    {name: "Lucknow",population: 3414125}
];

// console.log(cities.filter(city=>{
//     return city.population >300000
// }))

// console.log(cities.filter(city=>city.population >300000 ))
console.log(cities.map(city=>city.population * 2 ))