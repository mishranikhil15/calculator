// index.js

//  import the crypto module

const crypto= require("crypto")

//  get a commands using process.argv



// complete the  function
function add(argv1,argv2){
  return (+argv1)+(+argv2)
}

function sub(argv1,argv2){
  return (+argv1)-(+argv2)
}

function mult(argv1,argv2){
  return Number(argv1)*Number(argv2)
}

function divide(argv1,argv2){
  return Number(argv1)/Number(argv2)
}

function sin(argv1,argv2){
  return Math.sin(Number(argv1))
}

function cos(argv1,argv2){
  return Math.cos(Number(argv1))
}

function tan(argv1,argv2){
  return Math.tan(Number(argv1))
}

const process= require("process");

const cmd = process.argv;

// console.log(cmd)
// console.log(cmd[2],cmd[3],cmd[4])

const command= cmd[2];
const argv1= cmd[3];
const argv2= cmd[4];

if(command=="add"){
 
  console.log(add(argv1,argv2))

}else if(command=="sub"){
  
  console.log(sub(argv1,argv2))

}else if(command=="mult"){
 
  console.log(mult(argv1,argv2))

}else if(command=="divide"){
  
  console.log(divide(argv1,argv2))

}else if(command=="sin"){
 
  console.log(sin(argv1,argv2))

}else if(command=="cos"){
 
  console.log(cos(argv1,argv2))

}else if(command=="tan"){
 
  console.log(tan(argv1,argv2))
}


// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
