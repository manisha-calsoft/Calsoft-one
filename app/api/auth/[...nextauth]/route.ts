import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {},
        password: {},
      },
      async authorize({ email, password }: any, req) {
        const data = {
          email: email,
          password: password,
        };
        try {
          const response = await fetch(
            `https://hyemwex4ti.us-east-1.awsapprunner.com/user/loginUser`,
            {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(data),
            }
          );
          console.log("resp ==>", response.json());
        } catch (e) {
          console.log({ e });
        }

        // if (!data?.user || error) {
        //   return null
        // }
        // return data.user

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
