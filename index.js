// index.js

//  import the crypto module



//  get a commands using process.argv


// complete the  function

const process= require("process");

const cmd = process.argv;

console.log(cmd)
// console.log(cmd[2],cmd[3],cmd[4])

const command= cmd[2];
const argv1= cmd[3];
const argv2= cmd[4];

if(command=="add"){
  function add(argv1,argv2){
    return (+argv1)+(+argv2)
  }
  console.log(add(argv1,argv2))

}else if(command=="sub"){
  function sub(argv1,argv2){
    return (+argv1)-(+argv2)
  }
  console.log(sub(argv1,argv2))

}else if(command=="mult"){
  function mult(argv1,argv2){
    return (+argv1)*(+argv2)
  }
  console.log(mult(argv1,argv2))

}else if(command=="div"){
  function div(argv1,argv2){
    return (+argv1)/(+argv2)
  }
  console.log(div(argv1,argv2))
}else if(command=="sin"){
  function sin(argv1,argv2){
    return Math.sin(+argv1)
  }
  console.log(sin(argv1,argv2))
}else if(command=="cos"){
  function cos(argv1,argv2){
    return Math.cos(+argv1)
  }
  console.log(cos(argv1,argv2))
}else if(command=="tan"){
  function tan(argv1,argv2){
    return Math.tan(+argv1)
  }
  console.log(tan(argv1,argv2))
}



// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
