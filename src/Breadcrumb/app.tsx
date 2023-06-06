import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const App: React.FC = () => {
  const paths = ['Home', 'Clothing', 'Women\'s Clothing', 'Dresses', 'Summer Collection'];

  return (
    <div>
      <h1>My App</h1>
      <Breadcrumbs paths={paths} />
      {/* Rest of your application */}
    </div>
  );
};

export default App;
