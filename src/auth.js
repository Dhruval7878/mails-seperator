import NextAuth from 'next-auth'
import { getMailHistory } from '../src/app/lib/gmail';
import GoogleProvider from 'next-auth/providers/google'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    secret: "",
    providers: [
        GoogleProvider({
            clientId: "",
            clientSecret: "",
            authorization: {
                params: { access_type: 'offline', prompt: 'consent', response_type: 'code', scope: 'openid email profile https://www.googleapis.com/auth/gmail.readonly' },
            }
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the access token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;

                // Retrieve the user's mail history immediately after login
                try {
                    const mailHistory = await getMailHistory(account.access_token);
                    // Add the mail history to the token
                    token.mailHistory = mailHistory;
                } catch (error) {
                    console.error('Error fetching mail history:', error);
                }
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access token from a provider.
            session.accessToken = token.accessToken;
            session.mailHistory = token.mailHistory;
            return session;
        },
    },
})