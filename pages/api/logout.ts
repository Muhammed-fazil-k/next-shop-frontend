import { NextApiHandler } from "next";
import cookie from 'cookie';
 const handleLogout:NextApiHandler = (req,res)=>{
    res
    .setHeader('Set-Cookie',cookie.serialize('jwt','',{
        path:'/api',//Only accesible in api routes
        expires:new Date(0),
      }))
    .status(200)
    .json({});
 }

 export default handleLogout;