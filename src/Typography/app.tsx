import React from 'react';
import Typography from './Typography';

const App: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="body" className="custom-class">Some text</Typography>
    </div>
  );
};

export default App;