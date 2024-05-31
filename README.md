# NextJS Template

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/pXfhDI?referralCode=2dmFBO)
<br />
[![Create Supabase DB](https://th.bing.com/th/id/OIP.elwfkXRthrN2H2k3VjSlFQAAAA?rs=1&pid=ImgDetMain&w=180&h=54)](https://supabase.com/dashboard/new/eciflimqtarfegcvohzn)

## Getting Started

After creating the Supabase project with the link above:

- Make sure Docker is running
- `npm i`
- `npm run db:init`
    - Select yes for all prompts
- `npm run db:login`
- `npx supabase link --project-ref YOUR_SUPABASE_REFERENCE_ID`
- Create a `.env.local` file and copy the env variables from `.env.local.sample`
- `npm run db:start`
    - Copy `service_role key` from terminal output to NEXT_PUBLIC_SUPABASE_KEY inside `.env.local`
    - You can view the local db from the `Studio URL`
- `npm run db:pull`
- `npm run db:reset-full`
- `npm run dev`
- Open [http://localhost:3000](http://localhost:3000)

*If empty arrays are being returned from the database then you probably don't have RLS policies setup.*

### Resend
- Setup a custom SMTP email server [here](https://resend.com)
    - You can follow this tutorial [here](https://resend.com/blog/how-to-configure-supabase-to-send-emails-from-your-domain)
    - Configure the SMTP Provider data inside `Supabase > Project Settings > Authentication`
