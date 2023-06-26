import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Layout from "../components/Layout";

const SignInPage = () => {
  return (
    <Layout title="Sign In">
      <form>
        <Field label="Email">
          <Input type="email" />
        </Field>
        <Field label="Password">
          <Input type="password" />
        </Field>
        <Button type="submit">Sign in</Button>
      </form>
    </Layout>
  );
};

export default SignInPage;
