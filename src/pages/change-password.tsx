import { Layout } from "@/components/Layout";
import Button from "@/components/Library/Button";
import Input from "@/components/Library/Input";
import { supabase } from "@/scripts/config/supabase";
import Link from "next/link";
import { FormEvent, useState } from "react";


export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: password });
    if (error) return console.error(error);
    location.replace('/');
  };


  return (
    <Layout title="Change Password">
      <div className="login">
        <h1>Change Password</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            variant={['label-stack']}
            label="Password"
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />
          <Input
            variant={['label-stack']}
            label="Confirm Password"
            type="password"
            value={password2}
            onChange={(e: any) => setPassword2(e.target.value)}
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
