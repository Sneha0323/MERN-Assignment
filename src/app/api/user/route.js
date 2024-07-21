import { NextResponse } from "next/server";

export function GET(){

    const users=[{
        username : "Neha",
        email:"nehasvermaind@gmail.com",
        password:"12345678"
    },
    {
        username : "Sonu",
        email:"sanjayverma@gmail.com",
        password:"12345678"
    },
    {
        username : "Anu",
        email:"anu@gmail.com",
        password:"12345678"
    }];

    return NextResponse.json(users);
}
export function POST(){
    
}

export function PUT(){
    
}
export function DELETE(){
console.log("dlelete api called")    
return NextResponse.json({
    message : "delete!!",
    status:true,
},
{

    status:201, statusText
    :"changed status"
})
}
