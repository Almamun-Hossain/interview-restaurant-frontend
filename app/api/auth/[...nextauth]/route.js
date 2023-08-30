import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          name: "email",
          placeholder: "example@mail.com",
        },
        password: { label: "Password", type: "password", name: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("No credentials.");
        }
        const res = await fetch("http://localhost:4000/api/v1/user/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (res.ok && data.success) {
          return { ...data.user, accessToken: data.token };
        } else {
          console.log(data);
          throw new Error(data.message);
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ token, session }) => {
      session.user.id = token.id;
      session.user.token = token.accessToken;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
