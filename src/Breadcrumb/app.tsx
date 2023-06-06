import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const App: React.FC = () => {
  const paths = ['Home', 'Catalog', 'Women\'s Clothing', 'Dresses', 'shoes'];

  return (
    <div>
      <h1>My App</h1>
      <Breadcrumbs paths={paths} />
      {/* Rest of your application */}
    </div>
  );
};

export default App;
