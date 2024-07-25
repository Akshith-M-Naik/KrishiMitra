let Newusername1;
let Newpass1;


function signup1(){
    Newusername1=document.getElementById("Newusername1").value;
    Newpass1=document.getElementById("Newpassword1").value;
 
    localStorage.setItem('username1',Newusername1);
    localStorage.setItem('password1',Newpass1);
    
    open("logininvestor.html")
}
