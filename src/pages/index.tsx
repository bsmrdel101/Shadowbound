import { Layout } from "@/components/Layout";
import { useEffect } from 'react';
import { userAtom } from '@/scripts/atoms/state';
import { supabase } from '@/scripts/config/supabase';
import { useAtom } from "jotai";
import Button from "@/components/Library/Button";


export default function Home() {
  const [user, setUser] = useAtom<User>(userAtom);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'INITIAL_SESSION') {
        if (session) {
          const user = {
            id: session.user.id,
            email: session.user.email,
          };
          setUser(user);
        } else {
          location.href = '/login';
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        location.href = '/login';
      }
    });
  }, []);


  return (
    <Layout title="Home">
      <main>
        <Button
          variant={['fit-content']}
          onClick={async () => {
            await supabase.auth.signOut();
          }}
        >
          Logout
        </Button>
        <h1>Hello World</h1>
      </main>
    </Layout>
  );
}
