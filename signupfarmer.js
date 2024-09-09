let Newusername;
let Newpass;


function signup(){
    Newusername=document.getElementById("Newusername").value;
    Newpass=document.getElementById("Newpassword").value;
 
    localStorage.setItem('username',Newusername);
    localStorage.setItem('password',Newpass);
    
    open("/loginfarmer")
}
