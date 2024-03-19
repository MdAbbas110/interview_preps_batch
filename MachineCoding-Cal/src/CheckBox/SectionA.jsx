import CheckboxDiv from './CheckboxDiv';

const listOptions = ['Student 1', 'Student 2', 'Student 3'];
const SectionA = () => {
  return (
    <div className="border p-4">
      <CheckboxDiv name={'sectionA'}>{'Section A'}</CheckboxDiv>
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

export default SectionA;
