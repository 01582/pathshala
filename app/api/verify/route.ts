import { NextResponse } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server"

const {
    isAuthenticated
} = getKindeServerSession();

export const GET = async (req:Request, res: Response) => {
    console.log(await isAuthenticated())
    const Auth = await isAuthenticated()
    return NextResponse.json({auth: ` ${Auth} `})
}
export const POST = async (req:Request, res: Response) => {
    console.log("Get an messages")
}