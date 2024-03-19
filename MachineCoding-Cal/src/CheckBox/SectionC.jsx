const listOptions = ['Student 7', 'Student 8', 'Student 9'];
import CheckboxDiv from './CheckboxDiv';

const SectionC = () => {
  return (
    <div className="border p-4">
      <CheckboxDiv name={'sectionC'}>{'Section C'}</CheckboxDiv>
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

export default SectionC;
