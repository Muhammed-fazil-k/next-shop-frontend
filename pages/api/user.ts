import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";

const CMS_URL = process.env.CMS_URL;

const handleUser: NextApiHandler = async (req, res) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    console.error('jwt is missing')
    return res.status(401).json({});
    
  }
  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json({ id: user.id, name: user.username });
  } catch (err) {
    console.error(err)
    res.status(401).end();
  }
};

export default handleUser;
