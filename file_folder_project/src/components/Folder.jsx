import { useState } from 'react';

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: '5px', paddingLeft: '50px' }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂 {explorer.name}</span>{' '}
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
