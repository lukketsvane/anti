// pages/api/twitter.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Make sure you pass the authorization header from your environment variables
  const headersConfig = {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  };

  try {
    // Fetch the user ID using Twitter username
    const { data: userData } = await axios.get(`https://api.twitter.com/2/users/by/username/amitoser`, headersConfig);
    const userId = userData.data.id;
    // Fetch tweets using the user ID
    const tweetsResponse = await axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, headersConfig);
    // Respond with fetched tweets
    res.status(200).json(tweetsResponse.data);
  } catch (error) {
    console.error('Twitter API Error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch tweets',
      details: error.response?.data || error.message,
    });
  }
}