const { default: NextAuth } = require("next-auth/next");
import Axios from "@/app/_utils/Axios";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password)
            throw new Error("Credentials are missing");
          let { data } = await Axios.post("/user/login", credentials);

          if (data) {
            let tokenData = {
              ...data.user,
              token: data.token,
            };
            return tokenData;
          }
          return null;
        } catch (error) {
          throw new Error(error?.response?.data?.message);
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      session.user = token;
      return session;
    },
    redirect: () => {
      return "/dashboard";
    },
  },
});

export { handler as GET, handler as POST };
