import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";
const handleLogin: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    //405 it doesnt support other methods
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;

  try {
    const { jwt, user } = await fetchJson("http://localhost:1337/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });
    res.status(200).json({
      id: user.id,
      username: user.username,
    });
  } catch (err) {
    //invalid credential status
    res.status(401).end();
    return;
  }

  //console.log(userData);
};

export default handleLogin;
