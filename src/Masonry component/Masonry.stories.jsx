import React from 'react';
import Masonry from './masonry';

const MyComponent = () => {
  return (
    <div>
      <h1>My Masonry Grid</h1>
      <Masonry columnWidth={200} gutter={20}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        {/* Add more items here */}
      </Masonry>
    </div>
  );
};

export default MyComponent;
