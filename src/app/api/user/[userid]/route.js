import { NextResponse } from "next/server";

 // @ts-ignore
 export function DELETE(request,{params}){
    console.log(params)
    const userid = params.userid
    console.log("User id",userid)
    return NextResponse.json({
        message:"testing delete"
    })
 }