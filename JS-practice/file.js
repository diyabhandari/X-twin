"use strict"
//alert("hello world ");
//let admin;
//let name="John";
//admin = name; name was copied to admin, but why strikethrough?, some sorta keyword maybe
//alert(admin);
//alert(`admin is ${admin}`);

/*let name1=prompt("enter your name ","none");//prompt is like cin
alert(`entered name is : ${name1}`);
let isAge = confirm("are you above 18 ?");
alert(`${isAge}`);*/

/*
let ques= prompt("What is the 'official' name of Javascript ?","");
if(ques=="ECMAscript"){
  alert("Right !");
}
else{
  alert("Wrong !");
} */

/*let ans = prompt("Enter a number ",0);
(ans>0)?
  alert(1):
(ans==0)?
  alert(0):
(ans<0)?
  alert(-1):'';*/

  //alert = undefined = falsy

/*
let age = prompt("enter age ",18);
if(age<14 || age>90){
  alert("ok");
}
  */

/*
let passWord;
let role=prompt("Who's there ?","");
if(role=="Admin" || role=="admin"){
  passWord = prompt("Enter password","");
  if(passWord==""||passWord==null){
    alert("Cancelled");
  }
  else if(passWord=="TheMaster"){
    alert("Welcome");
  }
  else{
    alert("Wrong password");
  }
  }

else if(role==""||role==null){
  alert("Cancelled");
}
else{
  alert("i dont know you ");
} */

/*op even numbers with a loop
for(let i=2;i<=10;i++){
  if(i%2!=0) continue;
  alert(i);
}*/
/*
let browser=prompt("Enter browser name",null);
if(browser==="Edge"){
  alert("You've got the Edge!");
}
else if(browser==="Chrome"||browser==="Firefox"||browser==="Safari"||browser==="Opera"){
  alert("Okay we support these browsers too");
}
else{
  alert("We hope that this page looks ok!");
} */

let a = +prompt("whats a?","null");
switch(a){
  case 0:
    alert(0);
  case 1:
    alert(1);
  case 2:case 3:
    alert("2,3");
}