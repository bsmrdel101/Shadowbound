import { Layout } from "@/components/Layout";
import Button from "@/components/Library/Button";
import Input from "@/components/Library/Input";
import { supabase } from "@/scripts/config/supabase";
import Link from "next/link";
import { FormEvent, useState } from "react";


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) return console.error(error);
  };


  return (
    <Layout title="Register">
      <div className="login">
        <h1>Register</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            variant={['label-stack']}
            label="Email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
          />
          <Input
            variant={['label-stack']}
            label="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </form>

        <div className="login__links">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </Layout>
  );
}
