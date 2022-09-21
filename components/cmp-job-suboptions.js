import { useState } from 'react';
import Image from 'next/image';

export default function JobSuboptions({option, subOption, handleTagClick}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button className='flex text-sm font-normal fontVarNormal border-0 even:bg-gray-100' onClick={() => {handleTagClick(subOption, option.title); setIsChecked(!isChecked)}}>
      <div className={`${isChecked? 'bg-gray-500' : ''} border-[1px] rounded-sm border-gray-500 h-5 w-5 mr-2 `}>
        {/* <Image src='/shared/ic-check.svg' alt='check icon' width={20} height={20} /> */}
      </div>
      <p className='text-sm'>{ subOption }</p>
    </button>
  )
}
