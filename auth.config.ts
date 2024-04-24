import Google from "next-auth/providers/google"
import vercelPostgresAdapter from "@/lib/vercelPostgresAdapter";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  debug: true,
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  adapter: vercelPostgresAdapter(),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    })
  ],
  callbacks: {
    authorized({ auth, request: {nextUrl} }) {
      const pathname = nextUrl.pathname
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = pathname.startsWith('/dashboard');
      const isOnGame = pathname.startsWith("/game");
      const isOnHomePage = pathname == "/";
      const loginRequired = isOnDashboard || isOnGame;
      // console.log("path:", pathname, "loginRequired:", loginRequired, "isLoggedIn:", isLoggedIn, )
      if (isOnHomePage && isLoggedIn) {
          return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return (loginRequired && !isLoggedIn) ? false : true;
    },
    // signIn({user, account, profile, email, credentials}) {
    //   const debugData = { user, account, profile, email, credentials};
    //   console.log("signIn()\n", JSON.stringify(debugData, null, 4));
    //   return true
    // },
    jwt({ token, user, account, profile}) {
      // const debugData = { token, user, account, profile}
      // console.log("jwt(): \n", JSON.stringify(debugData, null, 4));
      if (user) {
        token.id = user.id
      }
      if (profile) {
        token.given_name = profile.given_name
      }
      return token
    },
    session({ session, user, token}) {
      // const debugData = { session, user, token}
      // console.log("session()\n", JSON.stringify(debugData, null, 4));
      //ts-ignore-next
      if (token && session.user) {
        // @ts-ignore
        session.user.id = token.id
        if (token.given_name) {
          // @ts-ignore
          session.user.given_name = token.given_name
        }
      }
      return session;
    }
  }
} satisfies NextAuthConfig;



