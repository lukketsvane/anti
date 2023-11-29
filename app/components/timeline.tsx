import React, { useEffect, useState } from 'react';

interface Tweet {
  id: string;
  text: string;
}

const Timeline: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('/api/twitter');
        if (!response.ok) {
          throw new Error(await response.text());
        }
        const tweetsData = await response.json();
        setTweets(tweetsData.data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchTweets();
  }, []);


  return (
    <div className="divide-y divide-gray-200">
      {error ? (
        <p className="py-4 text-center text-red-500">{error}</p>
      ) : tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div key={tweet.id} className="py-4">
            <p className="text-gray-700">{tweet.text}</p>
          </div>
        ))
      ) : (
        <p className="py-4 text-center text-gray-500">No tweets to display.</p>
      )}
    </div>
  );
};

export default Timeline;