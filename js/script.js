window.addEventListener('load', (e) =>{
   let findForm = document.getElementById('empForm');
       findForm.addEventListener('submit',(e) =>{

        e.preventDefault();

        let emp = document.getElementById('inputID');
        console.log(emp.name  + ':' + emp.value + '\n');

        let empName = document.getElementById('inputName');
        console.log(empName.name  + ':' +  empName.value + '\n');

        let exten = document.getElementById('inpuExt');
        console.log(exten.name  + ':' +  exten.value + '\n');

        let empEmail = document.getElementById('inputEmail');
        console.log(empEmail.name  + ':' +   empEmail.value + '\n');

        let empDep = document.getElementById('inputDep');
        console.log(empDep.name  + ':' +   empDep.value + '\n');
  
       });
 });


