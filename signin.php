<?php 
session_start(); 
//echo "popo";

include("co.php");
if(isset($_POST['submit']))
{
  $email = ($_POST['email']);
  $pass = ($_POST['pass']);
  $p=md5($pass);
//echo $u_pass;

$sql="select * from login where email='$email'";
//echo $sql;

$result=mysqli_query($con,$sql);
$rowcount=mysqli_num_rows($result);
if($rowcount!=0)
{

	while($row=mysqli_fetch_array($result))
	{
		$dbu_email=$row['email'];
		$dbu_pass=$row['password'];
		$dbu_type=$row['usertype'];
        
		if($dbu_email==$email && $dbu_pass==$p)
		{
			//$_SESSION['uname']=$dbu_name;
            //$_SESSION['u_pass']=$dbu_pass;
		     //echo $dbu_type;
			if($dbu_type==0)	
			{
				//$_SESSION['type']="Admin";
               	header("location: adminhome.html");
			}
			else if($dbu_type==1)
			{
				//$_SESSION['type']="Seller";
                	header("location:index.html");
			}
			else if($dbu_type==2)
			{
				//$_SESSION['type']="User";
					header("location:index.html");
			}
		}
		else
        {
				//header("location:login.php?error=wrong password");
          echo "invalid login";
        }
	}
}
else
{
			//header("location:login.php?error=User Not Found");
			//echo "not found";	
}
}

?>