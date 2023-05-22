var a=2;
var b=22;
var c=00;
var d="PM";
let f=`${a}:${b}:${c} ${d}`;
console.log("12 Hr format");
console.log(f);



function format(a,b,c,d)
{
    if(d=="AM")
    {
        if(a==12)
        {
            a=12-12;
        }

        else
        {
        }
    }

    else
    {
        if(a==12)
        {
        }
        
        else
        {
            a=12+a;
        }
        
    }
    
    console.log("24 Hr format");
    let e=`${a}:${b}:${c} ${d}`;
    console.log(e);
}

format(a,b,c,d);


