import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name:"Time Scribe Admin Login",
      credentials: {
        email: { label: "email", type: "text", placeholder: "admin@gmail.com" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        let email = credentials.email;
        let password = credentials.password;

        const body = JSON.stringify({
          email: email,
          password: password
        });

        const res = await fetch(`${process.env.API_URL}/user/login`, {
          method: "POST",
          body: body,
          headers: {
            "Content-Type": "application/json"
            // Authentication: `Bearer ${process.env.API_TOKEN}`
          }
        });

        const data = await res.json();
        const user = data.result.data;
        if (res.ok && user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email
          };
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { scope: "openid email profile" } }
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/",
    newUser: "/register",
    error: "/error"
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      // console.log("session 1", session);
      // console.log("token 1", token);
      // console.log("user 1", user);

      if (token) {
        session.accessToken = token.accessToken;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.accessToken = token.accessToken;
      }

      try {
        let userData = await axios.post(process.env.API_URL+"/user/login", {
          data: token
        });

        userData = userData.data.result.data;
        session.user._id = userData.id;
        session.user.user_id = userData.user_id;
      } catch {
        console.log("sesssion creation failed");
      }
      // console.log(session);
      return session;
    },
    jwt: async ({ token, user, account, profile }) => {
      console.log("token 2", token);
      console.log("user 2", user);

      if (account && user) {
        token.id = profile?.id || user.id;
        token.email = user.email;
        token.username = user.name;
        token.user_type = user.picture;
        token.accessToken = account.access_token;
      }

      return token;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };