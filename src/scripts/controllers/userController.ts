import { supabase } from "../config/supabase";


// === GET routes === //

export const getUser = async () => {
  const res = await supabase.auth.getSession();
  if (!res.data.session) return console.error('No user session');

  const { data, error } = await supabase.auth.getUser();
  if (error) return console.error(error);

  const userData: User = {
    id: data.user.id,
    email: data.user.email,
  };
  return userData;  
};
