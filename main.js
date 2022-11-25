//let id = document.getElementById('username'),
 //email = document.getElementById('email'),
 //password = document.getElementById('password');

 //let errorMsg = document.getElementsByClassName("error"),
   // successIcon = document.getElementsByClassName("success-icon"),
    //failureIcon = document.getElementsByClassName("failure-icon");

 let id = (id) => document.getElementById(id);
 let classes =(classes) =>document.getElementsByClassName(classes);

 let username = id("username"),
    password = id("password"),
    email = id("email"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault(); //callblack() trong js
    engine(username,0,"Username cannot be black!!!");
    engine(email,1,"Email cannot be black!!!"); 
    engine(password,2,"Password cannot be black!!!");
});

let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border="2px soild red";
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border="2px soild green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }

};
