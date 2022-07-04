const characters=[
{
    name:'Tarak Mehta',
    height:'172',
    mass:'77',
    eye_color:'brown',
    gender:'male',
},
{
    name:'Jethalal',
    height:'145',
    mass:'136',
    eye_color:'black',
    gender:'male',
},
{
    name:'Babita Ji',
    height:'145',
    mass:'49',
    eye_color:'grey',
    gender:'Female',
},
{
    name:'Krishnan Iyer',
    height:'168',
    mass:'84',
    eye_color:'black',
    gender:'male',
}]


//get all names from array
const names=characters.map(ch=> ch.name);
console.log(names);

//get an array of ojbecgts with just name and height properties
const propertiesOfCh=characters.map(ch=> {
    return{
        name:ch.name,
        height:ch.height
    }
})
console.log(propertiesOfCh);