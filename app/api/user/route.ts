import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const client = new PrismaClient
// npx prisma migrate dev --name init_schema
// npx prisma generate

    // async function getdata() {
    //     const response = axios.get('')
    //    console.log(response)
    //     return response
    // }


// export  async function POST(req: NextRequest) {
//     const body = await req.json()
//     console.log(body)
    // const users = await client.user.findMany();
    // console.log(users)
   
//     return NextResponse.json({
//         message : "Success"
//     })
// }