// components/Timeline.tsx

import React, { useEffect, useState } from 'react';

interface Tweet {
  id: string;
  text: string;
}

const Timeline: React.FC<{ username: string }> = ({ username }) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/twitter?username=${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch tweets');
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.data) {
          setTweets(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (tweets.length === 0) return <div>No tweets to display</div>;

  return (
    <div className="divide-y divide-gray-200">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="p-4">
          <p className="text-gray-700">{tweet.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;