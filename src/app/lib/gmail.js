import { google } from 'googleapis';

// Function to retrieve mail history
export async function getMailHistory(accessToken) {
  try {
    // Create an OAuth2 client
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    // Create a Gmail client
    const gmail = google.gmail({ version: 'v1', auth });

    // List messages from the user's mailbox
    const response = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 10, // Specify the maximum number of messages to retrieve
    });

    // Process the response
    const messages = response.data.messages;
    console.log('Mail History:', messages);

    return messages;
  } catch (error) {
    console.error('Error retrieving mail history:', error);
    throw error;
  }
}
