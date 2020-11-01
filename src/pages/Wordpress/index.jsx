import React from 'react';

import Loop from './components/loop';
import WPQuery from './components/wpQuery';

function Wordpress() {
  return (
    <div className="p-0">
      <h1 className="text-dark shadow px-5 py-3 mb-5">Worpress Tips</h1>
      <Loop />
      <WPQuery />
    </div>
  );
}

export default Wordpress;