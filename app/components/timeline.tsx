import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Tweet {
  id: string;
  text: string;
}

const Timeline: React.FC = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/twitter')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problem fetching tweets');
        }
        return response.json();
      })
      .then((data) => {
        setTweets(data.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tweets) {
    return <div>No tweets available.</div>;
  }

  return (
    <div className="space-y-4">
      {tweets.map((tweet) => (
        <motion.div
          key={tweet.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 shadow rounded bg-white"
        >
          <p className="text-gray-800">{tweet.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
