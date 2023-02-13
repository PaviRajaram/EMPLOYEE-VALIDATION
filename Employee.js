 var Employees=[];
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
 var employee=JSON.stringify(Employee);
 console.log(Employees);
 Employees.push(employee);
 localStorage.Employee+=Employees;
 localStorage.setItem("Employee",Employees);
 //localStorage.Employees+=JSON.stringify(Employee);
 alert(employee);
 }
