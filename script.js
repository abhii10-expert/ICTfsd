let a = 10;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

let c=2;
let d=c++;
console.log(d);
console.log(c);

let e=1;
let f="1";

if(e==f)
{
    console.log("true");
}
else
{
    console.log("false");
}

if(e===f)
{
    console.log("true");
}
else
{
    console.log("false");
}

//objcreation
let person={
    name:"Meera",
    age:18,
    place:"Bnglr"
};

console.log(person);

let fname="Ravi";
let lname="P";
let full=  `${fname} ${lname}`
console.log(full);