import { Provider, useAtom } from 'jotai';
import { useEffect } from 'react';
import { userAtom } from '@/scripts/atoms/state';
import { getUser } from '@/scripts/controllers/userController';
import '../styles/globals.scss';


export default function App({ Component, pageProps }: any) {
  const [user, setUser] = useAtom<User>(userAtom);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser() as User;
      if (user) setUser(user);
    };
    fetchData();
  }, []);  
  

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
