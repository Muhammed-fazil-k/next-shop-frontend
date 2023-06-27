import {NextApiHandler} from 'next'
const handleLogin:NextApiHandler = (req, res) => {
  if (req.method !== "POST") {
    //405 it doesnt support other methods
    res.status(405).end();
    return
  }
  console.log(req.body);
  res.status(200).json({});
}

export default handleLogin;
