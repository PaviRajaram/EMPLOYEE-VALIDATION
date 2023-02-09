deletefn=()=>{
    document.getElementById("Ename").value="";
    document.getElementById("id").value="";
    document.getElementById("dsgn").value="";
    document.getElementById("salary").value="";
    document.getElementById("dob").value="";   
 }
 submitfn=()=>{
    const Ename= document.getElementById("Ename").value;
    const Eid=document.getElementById("id").value;
    const date=new Date();
    var Employee={
        id:Eid,
        pswd:date.getTime()
    };
 var Employees=[];
 var employee=JSON.stringify(Employee);
 
 
 console.log(Employees);
 Employees.push(employee);
 localStorage.Employee+=Employees;
//Employees.push(Employee);
 //localStorage.setItem("Employee",JSON.stringify(Employees));
 //Employees.push(JSON.parse(localStorage.getItem('Employees')));

 //window.localStorage.setItem('Employee',employee);
 //localStorage.Employees+=JSON.stringify(Employee);
 //localStorage.setItem('Employee1',Employees+=employee);
 //alert(localStorage.getItem('employee'));
 //window.location.href="file:///C:/Users/pavii/javascript/login.html"

 alert(employee);
 }