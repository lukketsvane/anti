// pages/api/twitter/[username].js
import axios from 'axios';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!process.env.TWITTER_BEARER_TOKEN) {
    return res.status(500).json({ error: 'Server is not configured with Twitter Bearer Token.' });
  }

  try {
    const userResponse = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
      headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` },
    });
    const userId = userResponse.data.data.id;

    const tweetsResponse = await axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` },
    });

    return res.status(200).json(tweetsResponse.data);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return res.status(500).json({ error: 'Error fetching tweets', details: error.message });
  }
}
