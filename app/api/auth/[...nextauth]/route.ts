import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";

const handeler = NextAuth({
    providers: [  
        CredentialsProvider({
                name : "credentials",
                credentials: {
                    username: { label: "Username", type: "text", placeholder: "jsmith" },
                    password: { label: "Password", type: "password" }
                  } ,
                   async authorize(credentials : any, req) {
                    console.log( "credentials ",credentials)
                    return {
                        id : "user1",
                        data: "km",
                        username: "koushik maity",
                        password: "fgvgvdf"
                    }
                   }
        })
    ]
})

// export function handelers(req: NextRequest ,args: any){
//             console.log(args.params.nextauth)
//             return NextResponse.json({
//                 message : "Authent"
//             })
// }

export const GET = handeler;
// export const POST = handeler;