// let lectures=10;
// let section =3;
// let tittle ='Javasscript';

// const course={
//     lecture: 10,
//     section: 3,
//     title:{
//         introduction: "Welcome to JS cousre"
//     },
//     enroll(){
//         console.log("you are sucessfully enrolled");
//     }
// }

// course.enroll()
// console.log(course.title)

//Factory function
function createCourse(title){
    return{
        title: title,
        enroll(){
            console.log("you are sucessfully enrolled");
        }
    } 
}
// const course=createCourse("javascript");
// course.enroll();
// console.log(course);

//Constructor Function
// function Course(title){
//     this.title=title,
//     this.enroll=function(){
//         console.log('you are sucessfully enrolled');
//     }
// }

// const course = new Course('Javascript');
// delete course.title;
// course.checkEnrollment=funtion(){
//     console.log("this function is added");
// }
// course.enroll();

// console.log(course);

// const Course_1=new Function('title',`
// this.title=title,
// this.enroll=function(){
//     console.log('you are sucessfully enrolled');
// }
// `)

// const course_2= new Course_1('Javascript');
// course_2.enroll();

const course={
    tite:'Javascript',
    enroll(){
        console.group("you are sucessfully registered");
    }
}

// const course_1={...course}
// course_1.title="c++";

const course_1=Object.assign({},course)
course_1.title="c++";
console.log(course_1.title);
console.log(course);

for(let key in course){
    console.log(key,course[key]);
}

const course_1={};
for(let key of Object.keys(course)){
    console.log(key,course[key]);
}




