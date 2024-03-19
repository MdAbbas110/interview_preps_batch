import CheckboxDiv from './CheckboxDiv';
import SectionA from './SectionA';
import SectionC from './SectionC';
import SectionB from './sectionB';

const Checkbox = () => {
  return (
    <div className=" max-w-[700px]  mx-auto mt-8">
      <h1 className="text-center text-xl">Check Box react app</h1>
      <div className="rounded-xl border  border-gray-600">
        <div className="ml-10 mt-4">
          <CheckboxDiv name={'main'}>{'Class 10'}</CheckboxDiv>
        </div>
        <div className="p-10 flex flex-col gap-5">
          <SectionA />
          <SectionB />
          <SectionC />
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
