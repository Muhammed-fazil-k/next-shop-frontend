import { FormEventHandler, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { fetchJson } from "../lib/api";
import { log } from "console";
import { stat } from "fs";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus({loading:true,error:false});
    await sleep(4000);
    try {
      const res = await fetchJson("http://localhost:1337/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
      setStatus({loading:false,error:false});
      console.log("[sign-in]: ", res);
    } catch (err) {
      setStatus({loading:false,error:true});
    }
  };
  return (
    <Layout title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label="Password">
          <Input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        {status.error && <p className="text-red-500">Credentials are invalid</p>}
        {status.loading ? (<p>Loading...</p>) : <Button type="submit">Sign in</Button>}
        
      </form>
    </Layout>
  );
};

export default SignInPage;
