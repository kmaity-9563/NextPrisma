"use client"

import { signIn ,  signOut , useSession } from "next-auth/react"

export default function Appbar() {
    const session = useSession()
    {console.log(session)}
    return <div>
               <button onClick={() => signIn()} >sign in </button>
               <button onClick={() => signOut()} >sign out</button>
              
               {JSON.stringify(session)}
    </div>
}