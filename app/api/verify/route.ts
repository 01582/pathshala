import { NextResponse } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server"
import { db } from "@/lib/db";
import { useState } from "react";


const {
    isAuthenticated,
    getAccessToken
} = getKindeServerSession();



export const GET = async (req:Request, res: Response) => {
    const [tokenValid, setTokenValid] = useState('');

    console.log(await isAuthenticated())
    const Auth = await isAuthenticated()
    const Token = await getAccessToken()
    try {
        const user = await db.user.findUnique({
            where: { tokens: { has: Token } },
          });
          
    if (user) {
       console.log("Token valid")
       setTokenValid('true')
      } else {
        console.log('Invalid token' );
        setTokenValid('false')
      }
    } catch (error) {
        
    }
    return NextResponse.json({auth: ` ${Auth} `, token: `${Token}`, isValid: `${tokenValid}` })
}
export const POST = async (req:Request, res: Response) => {
    console.log("No post request allowed 402")
}