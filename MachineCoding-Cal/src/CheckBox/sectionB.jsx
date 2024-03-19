import CheckboxDiv from './CheckboxDiv';

const listOptions = ['Student 4', 'Student 5', 'Student 6'];
const SectionB = () => {
  return (
    <div className="border p-4">
      <CheckboxDiv name={'sectionB'}>{'Section B'}</CheckboxDiv>
      {listOptions.map((item, index) => {
        return (
          <div className="ml-8" key={index}>
            <CheckboxDiv name={'item'}>{item}</CheckboxDiv>
          </div>
        );
      })}
    </div>
  );
};

export default SectionB;
