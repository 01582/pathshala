import { NextResponse } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server"


const {
    isAuthenticated,
    getAccessToken
} = getKindeServerSession();



export const GET = async (req:Request, res: Response) => {
    console.log(await isAuthenticated())
    const Auth = await isAuthenticated()
    const Token = await getAccessToken()
    
    return NextResponse.json({auth: ` ${Auth} `, token: `${Token}` })
}
export const POST = async (req:Request, res: Response) => {
    console.log("No post request allowed 402")
}