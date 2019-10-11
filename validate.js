function validate()
{ 

  var nm=document.reg.sname.value;

   if( nm == "" )
   {
     
     alert( "Please provide your Name!" );
     document.reg.sname.focus();
     return false;
   }
   
   if ((nm.length < 5) || (nm.length > 15))
{
alert("Enter valid Name");
document.getElementById("sname").select();
return false
}


var phone=document.getElementById("phone").value;
 if(phone == "")
    {
    alert("Enter Phone number");
    document.getElementById("phone").focus();
    return false;
    } 
    else if(isNaN(phone))
    {
      alert("Enter Valid Phone number");
      document.getElementById("phone").focus();
      return false;
    }
    else if(phone.length>0 && phone.length!=10)
    {
      alert("Enter Phone either too short or too long");
      document.getElementById("phone").focus();
      return false;
    }
    else if((document.getElementById("phone").value.charAt(0)!=9) && 
    (document.getElementById("phone").value.charAt(0)!=8) && 
    (document.getElementById("phone").value.charAt(0)!=7))
   {
     alert( "Please provide a valid 10 digit mobile no. start with '9' or '8' or'7'" );
     document.getElementById("phone").focus();
     return false;
   }
    


if( document.reg.dob.value == "" )
   {
     alert( "Please provide your DOB!" );
     document.reg.dob.focus() ;
     return false;
   }

     var adhar=document.getElementById("adhar").value;
   if(adhar=="")
   {
      alert("Enter adhar number");
      document.getElementById("adhar").focus();
      return false;
   }
   else if(adhar.length>0 && adhar.length!=12)
   {
      alert("Adhar no.should contain 12 digits");
      document.getElementById("adhar").focus();
      return false;  
   }

      var a=document.forms["reg"]["show"].value;
   if(a== "" )
   {
     alert( "Please select your Showroom!" );
    document.reg.show.focus() ;
     return false;
   }   


if( document.reg.add.value == "" )
   {
     alert( "Please provide your house name!" );
     document.reg.add.focus() ;
     return false;
   }
   if( document.reg.land.value == "" )
   {
     alert( "Please provide your Landmark!" );
     document.reg.land.focus() ;
     return false;
   }
   if( document.reg.street.value == "" )
   {
     alert( "Please provide your Street!" );
     document.reg.street.focus() ;
     return false;
   }
if( document.reg.pin.value == "" ||
           isNaN( document.reg.pin.value) ||
           document.reg.pin.value.length != 6 )
   {
     alert( "Please provide a valid pincode " );
     document.reg.pin.focus() ;
     return false;
   }

var email = document.reg.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.reg.email.focus() ;
     return false;
 }


var password=document.reg.pass.value; 
if(password=="")
{
alert("Please Enter Your Password");
document.reg.pass.focus();
return false;
}
 if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  

  
  var cpassword=document.reg.cpass.value; 
if(cpassword=="")
{
alert("Please Re-Enter Your Password");
document.reg.cpass.focus();
return false;
}
 
  
  if(password != cpassword)
  {
    alert("password doesn't match");
    document.reg.pass.value='';
    document.reg.cpass.value='';
    document.reg.pass.focus();
    return false;
  }
return( true );
}