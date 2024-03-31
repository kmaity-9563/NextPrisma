import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handelers = NextAuth({
    providers: [  
        CredentialsProvider({
                name : "credentials",
                credentials: {
                    username: { label: "Username", type: "text", placeholder: "jsmith" },
                    password: { label: "Password", type: "password" }
                  } ,
                   async authorize(credentials, req) {
                    console.log( "credentials ",credentials)
                    return{
                        id : "user1",
                        username: "koushik maity"
                    }
                   }
        })
    ]
})

export const GET = handelers;