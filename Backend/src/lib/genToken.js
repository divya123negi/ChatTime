import jwt from "jsonwebtoken"

export const generateToken = (userId,res)=>{
   const accessToken = jwt.sign( {userId},process.env.JWT_SECRET_KEY,{
    expiresIn:"7d"
   })
   res.cookie("jwt",accessToken,{
    httpOnly:true,
    maxAge:7*24*60*60*1000,
    sameSite:"strict",
    secure:process.env.NODE_ENV !=="development"
   })
   return accessToken
}