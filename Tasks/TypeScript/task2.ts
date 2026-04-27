interface person{
    name:string;
    age:number;
}

let a:person={
    name:"aditya",
    age:21,
}
console.log(a);

interface car{
    brand:string;
    model:string;
}

let car1:car={
    brand:"BMW",
    model:"M5",
}
let car2:car={
    brand:"TOYOTA",
    model:"TAISOR",
}
console.log(car1);
console.log(car2);

//create a variable status that only allows: active or inactive . try assingning a wrong value and observe the error

// type status="active"|"inactive";
// let b:status

interface user{
    name:string;
    role:"admin"|"user";
}

let u1:user={
    name:"adi",
    role:"admin",
}
console.log(u1);

//create interface button 

interface button{
    text:string;
    type:"primary"|"secondary";
}

let button1:button={
    text:"enter",
    type:"primary",
}


interface order{
    id:number;
    status:"pending"|"completed";
}


