import { FormEventHandler, useState } from "react";
import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useSignIn } from "../hooks/user";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInError, signInLoading } = useSignIn();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //await sleep(4000);
    const isValid = await signIn(email, password);
    if (isValid) {
      router.push("/");
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
        {signInError && <p className="text-red-500">Credentials are invalid</p>}
        {signInLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign in</Button>
        )}
      </form>
    </Layout>
  );
};

export default SignInPage;
