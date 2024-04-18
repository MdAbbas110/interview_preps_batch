import { useState } from 'react';

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e) => {
    e.stopPropagation();

    setShowInput({
      visible: true,
      isFolder: e,
    });
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: '5px', paddingLeft: '50px' }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂 {explorer.name}</span>{' '}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={() => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? 'block' : 'none', cursor: 'pointer' }}>
          {explorer.items.map((exp, index) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
