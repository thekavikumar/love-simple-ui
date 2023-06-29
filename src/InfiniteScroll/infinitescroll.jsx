import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.example.com/data?page=${page}`);
      const newData = await response.json();
      setData(prevData => [...prevData, ...newData]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
