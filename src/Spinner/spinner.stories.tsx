import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface StoriesProps {
  fetchStories: () => Promise<Story[]>;
}

const Stories: React.FC<StoriesProps> = ({ fetchStories }) => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const loadStories = async () => {
      try {
        const fetchedStories = await fetchStories();
        setStories(fetchedStories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    loadStories();
  }, [fetchStories]);

  if (loading) {
    return <Spinner size={40} color="#000000" />;
  }

  return (
    <div>
      <h2>Stories</h2>
      {stories.map((story) => (
        <div key={story.id}>
          <h3>{story.title}</h3>
          <p>{story.content}</p>
          <p>Author: {story.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;




