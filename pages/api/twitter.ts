"use client";
// pages/api/twitter.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = req.query.username as string;

  if (!process.env.TWITTER_BEARER_TOKEN) {
    return res.status(500).json({ error: 'Twitter Bearer Token is not configured.' });
  }

  const twitterApi = axios.create({
    baseURL: 'https://api.twitter.com/2',
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  });

  try {
    const userResponse = await twitterApi.get(`/users/by/username/${username}`);
    const userId = userResponse.data.data.id;
    const tweetsResponse = await twitterApi.get(`/users/${userId}/tweets`);
    res.status(200).json(tweetsResponse.data);
  } catch (error) {
    console.error('Error fetching tweets:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to fetch tweets',
      details: error.response?.data || error.message,
    });
  }
}