var hint="true";
function checkfeild1()
{
    var fname=document.getElementById("firstname").value;
    var reg=/^[a-zA-Z]{2,15}$/;
    if (reg.test(fname))
    {
        document.getElementById("message1").innerHTML="";
    }
    else
    {
        document.getElementById("message1").style.color="red";
        document.getElementById("message1").innerHTML="Please enter first name of length 2-15 characters"+"<br/>";
        window['hint']="false";
    }
}
function checkfeild2()
{
  var lname=document.getElementById("lastname").value;
  var reg=/^[a-zA-Z]{2,25}$/;
  if (reg.test(lname))
  {
    document.getElementById("message2").innerHTML="";
  }
  else{
    document.getElementById("message2").style.color="red";
    document.getElementById("message2").innerHTML="Please enter last name of length 3-25 characters"+"<br/>";
    window['hint']="false";

  }
}
function validatepassword() {
    var newPassword = document.getElementById("password").value;
    var minNumberofChars = 8;
    if(newPassword.length < minNumberofChars)
    {
        document.getElementById("message3").style.color="red";
        document.getElementById("message3").innerHTML="Please enter password of minimum length 8"+"<br/>";
        window['hint']="false";
    }
    if (newPassword.search(/[a-z]/) < 0 || newPassword.search(/[A-Z]/) < 0 ||newPassword.search(/[0-9]/) < 0)
    {
        document.getElementById("message4").style.color="red";
        document.getElementById("message4").innerHTML="Enter a password whcih contains atleast one small letter,capital letter and number"+"<br/>";
        window['hint']="false;"
    }

}
function conform()
{
    var conformpass = document.getElementById("conformpassword").value;
    var newPassword = document.getElementById("password").value;
    if (conformpass != newPassword)
    {
        document.getElementById("message5").style.color="red";
        document.getElementById("message5").innerHTML="Please ensure that both passwords should match";
        window['hint']="false";
    }
}
function mail()
{
    var email=document.getElementById("email").value;
    var format=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(format))
    {
        document.getElementById("message6").innerHTML="";
    }
    else
    {
        document.getElementById("message6").style.color="red";
        document.getElementById("message6").innerHTML="Invalid E-mail Id";
        window['hint']="false";
    }
}
function final()
{
    if (hint=="false")
    {
        window.location.reload();
    }
    else
    {
        window.location.replace('home.html');
    }
}