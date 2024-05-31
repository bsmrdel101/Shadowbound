import { Layout } from "@/components/Layout";
import Button from "@/components/Library/Button";
import Input from "@/components/Library/Input";
import { supabase } from "@/scripts/config/supabase";
import Link from "next/link";
import { FormEvent, useState } from "react";


export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/change-password`,
    });
  };


  return (
    <Layout title="Reset Password">
      <div className="login">
        <h1>Reset Password</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            variant={['label-stack']}
            label="Email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Reset</Button>
        </form>

        <div className="login__links">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </Layout>
  );
}
