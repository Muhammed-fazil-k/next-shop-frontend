import { FormEventHandler, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { fetchJson } from "../lib/api";
import { log } from "console";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
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
    console.log("[sign-in]: ", res);
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
        <Button type="submit">Sign in</Button>
      </form>
    </Layout>
  );
};

export default SignInPage;
