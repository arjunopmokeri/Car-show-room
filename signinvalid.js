function valid()
{ 

var email = document.mysignin.name.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.mysignin.name.focus() ;
     return false;
 }

var password=document.mysignin.pass.value; 
if(password=="")
{
alert("Please Enter Your Password");
document.mysignin.pass.focus();
return false;
}
 if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  

return( true );

}