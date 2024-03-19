import { useState } from 'react';

const CheckboxDiv = ({ name, children }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="my-3">
      <input
        type="checkbox"
        name={name}
        id={`${name}-checkbox`}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="pl-3" htmlFor={`${name}-checkbox`}>
        {children}
      </label>
    </div>
  );
};

export default CheckboxDiv;
