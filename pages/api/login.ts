import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";
import cookie from 'cookie';
import { User } from "../../lib/user";

const CMS_URL = process.env.CMS_URL;


const handleLogin: NextApiHandler<User> = async (req, res) => {
  if (req.method !== "POST") {
    //405 it doesnt support other methods
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;

  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });
    res.status(200)
    .setHeader('Set-Cookie',cookie.serialize('jwt',jwt,{
      path:'/api',//Only accesible in api routes
      httpOnly:true, // client side js cannot get jwt value
    }))
    .json({
      id: user.id,
      name: user.username,
    });
  } catch (err) {
    //invalid credential status
    res.status(401).end();
    return;
  }

  //console.log(userData);
};

export default handleLogin;
