
import { NextResponse } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/server"
import checkTokenInDb from "@/components/p/CheckToken";




const {
    isAuthenticated,
    getAccessToken
} = getKindeServerSession();



export const GET = async (req:Request, res: Response) => {



    console.log(await isAuthenticated())
    const Auth = await isAuthenticated()
    const Token = await getAccessToken()
   
    function checkToken(){
        if(Token == undefined){
            return "not login";
        }
        else{
            return Token;
        }
    }
    console.log(Token)
    const user = await checkTokenInDb(checkToken())
    console.log(user)
   
    return NextResponse.json({auth: ` ${Auth} `, token: `${checkToken()}`, login: `${user}`    })
}
export const POST = async (req:Request, res: Response) => {
    console.log("No post request allowed 402")
}