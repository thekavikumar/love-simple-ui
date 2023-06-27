import React from 'react';
import Spinner from './Spinner';

const App: React.FC = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <Spinner size={80} color="#ff0000" />
    </div>
  );
};

export default App;

/* the Spinner component is imported and placed inside the App component. It is rendered with custom size and color props. Feel free to adjust the size and color props according to your desired spinner appearance.*/
