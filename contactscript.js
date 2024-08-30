const inputs=document.querySelectorAll(".input");

function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent=this.parentNode;
   
    if(this.value==""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
});

function validation(){
   
   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;
   var phone=document.getElementById("num").value;
   var message=document.getElementById("message").value;
   var name=document.getElementById("error_message");
    var text;
error_message.style.padding="10px";
if(name.length<=5){
    text="Please Enter Valid Number";
    error_message.innerHTML=text;
    return false;
}


if(email.indexOf("@") == -1 || email.length<6){
    text="Please enter valid Email";
    error_message.innerHTML=text;
    return false;
}
if(phone.length!=10){
    text="Please Enter valid phone Number";
    error_message.innerHTML=text;
    return false;
}
if(message.length<=14){
    text="Please Enter More Than 14 Characters";
    error_message.innerHTML=text;
    return false;
}
alert("Form Submitted Successfully")
return true;
}
