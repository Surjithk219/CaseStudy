

function email()
{
    let emai = document.getElementById("logemail").value;
     let pass = document.getElementById("logpass").value;

     vali(emai,pass,callback)
}
function vali(e,p,callback){
if((e=="admin")&&(p=="12345"))
{
callback();
}
else{
    
    alert("invalid username or password");
}
}
function callback()
{
    window.open("home.html");
    console.log("haii");
}