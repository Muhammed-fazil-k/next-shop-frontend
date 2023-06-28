import { FormEventHandler, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { fetchJson } from "../lib/api";
import { log } from "console";
import { stat } from "fs";
import { useRouter } from "next/router";
import {useMutation} from 'react-query';
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const mutation = useMutation(async()=>{
    return await fetchJson("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  })

  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //await sleep(4000);
    try {
      const user = await mutation.mutateAsync();
      console.log('[sign - in]:',user);
      router.push('/')
    } catch (err) {
      //mutation.isError will be true
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
        {mutation.isError && <p className="text-red-500">Credentials are invalid</p>}
        {mutation.isLoading ? (<p>Loading...</p>) : <Button type="submit">Sign in</Button>}
        
      </form>
    </Layout>
  );
};

export default SignInPage;
