 var Employees=[];
deletefn=()=>{
    document.getElementById("Ename").value="";
    document.getElementById("id").value="";
    document.getElementById("dsgn").value="";
    document.getElementById("salary").value="";
    document.getElementById("dob").value="";   
 }
submitfn=()=>{
    let name=document.getElementById("Ename").value;
    let desgn=document.getElementById("dsgn").value;
    let  Eid=document.getElementById("id").value;
    let salary= document.getElementById("salary").value; 
    //const date=new Date();
    var numbers = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    if(salary.match(numbers)&&name.match(letters)&&desgn.match(letters)&&Eid.match(numbers)){
        var Employee={
            id:Eid,
            //pswd:date.getTime()
            pswd:Eid+1
        };
        console.log(Employee);
        if(localStorage.getItem("Employee")==null){
        Employees.push(Employee);
        localStorage.setItem("Employee",JSON.stringify(Employees));
        alert(JSON.stringify(Employee));
        }
        else{
        var idP=JSON.parse(localStorage.getItem('Employee'));
        console.log("getmethod",idP);
        for(let i=idP.length-1;i>=0;i--){
        var user=idP.filter((employee)=>{return employee.id==Employee.id})[i];
        }
        console.log("user :",user);
            if(user)
            {
            alert("Id already exists..");
            }
            else{
            Employees.push(Employee);
            localStorage.setItem("Employee",JSON.stringify(Employees));
            alert(JSON.stringify(Employee));
        }
    }
 }else{
    alert("Invalid data..")
 }
}
