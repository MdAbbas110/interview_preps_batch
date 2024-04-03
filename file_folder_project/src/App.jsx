import { useState } from 'react';

import explorer from './explorerData';
import Folder from './components/Folder';

function App() {
  const [explorerData, setAllExplorerData] = useState(explorer);

  return (
    <>
      <div className="app">
        <Folder explorer={explorerData} />
      </div>
    </>
  );
}

export default App;
