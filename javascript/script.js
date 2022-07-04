let namasteBtn= document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

// function showMsg(){
//     alert("Namaste World!");
// }
function inputMsg(){
    let name = prompt('Enter Name of student');
    namasteBtn.textContent='Roll No. 1'+ name;
}   