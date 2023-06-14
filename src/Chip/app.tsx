import React from 'react';
import Chip from './Chip';

const App: React.FC = () => {
  const handleDelete = () => {
    // Handle chip deletion logic
  };

  return (
    <div>
      <Chip label="Tag 1" onDelete={handleDelete} />
      <Chip label="Tag 2" />
    </div>
  );
};

export default App;


/*
 The first chip has a label "Tag 1" and is associated with the handleDelete function. The second chip has a label "Tag 2" and doesn't have a delete functionality.
*/