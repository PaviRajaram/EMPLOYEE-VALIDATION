var keys=[];
var idPswd=[];
function validate(){
  var uname=document.getElementById("username").value;
  var pswd=document.getElementById("psw").value;

 if(uname=="")
 {
     alert("Enter your username ");
 }
 else if(pswd==""){
     alert("Enetr your 8 digit password");
 }
 else alert("Thankyou for Login");
}

clearfn=()=>{
 document.getElementById("username").value="";
 document.getElementById("psw").value="";

}
function EmployeeValidate(){
    var uname=document.getElementById("username").value;
    var psw=document.getElementById("psw").value;
      verify={
        id:uname,
        pswd:psw
      }
      keyVal=JSON.stringify(verifyPsw);
      keys.push(keyVal);
      console.log(keys);
      var idP=localStorage.getItem('Employee');
      idPswd.push(idP);
      console.log(idPswd);
      console.log(verify);
      for (let i=0;i<idPswd.length;i++)
       {
        if(idPswd[i]===keys[i]){
          alert("sucess")  
          window.open("file:///C:/Users/pavii/javascript/welcome.html");
        }
          else alert("fail")
       }

    }
}
