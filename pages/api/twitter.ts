// pages/api/twitter.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.TWITTER_BEARER_TOKEN) {
    return res.status(500).json({ message: 'Twitter Bearer Token is not defined in environment variables.' });
  }
  
  try {
    const username = 'amitoser';
    const userResponse = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
      headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` },
    });

    const userId = userResponse.data.data.id;
    const tweetsResponse = await axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` },
    });

    return res.status(200).json(tweetsResponse.data);
  } catch (error) {
    console.error('[Twitter API Error]', error.response?.data || error);
    return res.status(error.response?.status || 500).json({
      message: 'Error fetching tweets',
      details: error.response?.data || error.message,
    });
  }
}