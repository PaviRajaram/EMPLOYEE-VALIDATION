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
/*function EmployeeValidate(){
    var uname=document.getElementById("username").value;
    var pswd=document.getElementById("psw").value;
      verify={
        id:uname,
        pswd:pswd
      }
      console.log(verify);
      //var keys=JSON.parse(window.localStorage.getItem('Employee'));
      var keys=window.localStorage.getItem('Employee');
      console.log(keys);
      //if(JSON.stringify(keys)===JSON.stringify(verify)){
        if(verify===keys){
        alert("sucess");
      }else {
        alert("fail");
      }
}*/
