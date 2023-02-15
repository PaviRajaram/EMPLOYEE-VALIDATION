 var Employees=[];
deletefn=()=>{
    document.getElementById("Ename").value="";
    document.getElementById("id").value="";
    document.getElementById("dsgn").value="";
    document.getElementById("salary").value="";
    document.getElementById("dob").value="";   
 }
submitfn=()=>{
    const date=new Date();
    
 //localStorage.Employee+=Employees;
 //localStorage.setItem("Employee",JSON.stringify(Employees));

    let name=document.getElementById("Ename").value;
    let desgn=document.getElementById("dsgn").value;
    let  Eid=document.getElementById("id").value;
    let salary= document.getElementById("salary").value;
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    if(salary.match(numbers)&&name.match(letters)&&desgn.match(letters)&&Eid.match(numbers)){
        var Employee={
            id:Eid,
            //pswd:date.getTime()
            pswd:Eid+1
        };
        var employee=JSON.stringify(Employee);
        console.log(employee);
        Employees.push(employee);
        localStorage.setItem("Employee",Employees);
        alert(employee);
       }
       else{
        alert("Enter valid input");
     }
 }
