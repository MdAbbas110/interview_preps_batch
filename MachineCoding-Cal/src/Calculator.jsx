import { useState } from 'react';

const item = [
  '',
  'DE',
  'AC',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,

  '+',
  '-',
  '*',
  '/',
  '=',
];

const Calculator = () => {
  const [calculateNum, setCalculateNum] = useState('');

  const evoluteNumber = (event) => {
    const item = event.target.innerText;

    // item === '' ?

    if (item === 'AC') {
      setCalculateNum('');
      return;
    }

    if (item === 'DE') {
      setCalculateNum(calculateNum.slice(0, -1));
      return;
    }
    if (item === '=') {
      setCalculateNum(eval(calculateNum));
      return;
    }
    setCalculateNum(`${calculateNum}${item}`);
  };
  return (
    <>
      <div className="w-full h-[100dvh] bg-stone-700 flex justify-center items-center ">
        <div className="w-[20%] h-auto  bg-white p-12 flex flex-col rounded-xl">
          <div className="">
            <input
              type="text"
              readOnly
              value={calculateNum}
              className="border-2 text-lg border-violet-600 w-[100%] rounded-lg text-right"
            />
          </div>
          <div
            onClick={evoluteNumber}
            className="grid grid-cols-3 mt-4 cursor-pointer"
          >
            {item.map((num, index) => {
              return (
                <div className="px-3 py-2 border-2" key={index}>
                  {num}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
