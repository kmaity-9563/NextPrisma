"use server"

import client from '@/db'

 export default async function signup(email: string, password: string) {

    await client.user.create({
        data : {
            username : email,
            password : password
        }
    })
    return "success"

}