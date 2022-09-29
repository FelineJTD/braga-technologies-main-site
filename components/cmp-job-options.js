import { useState } from 'react';
import Image from 'next/image';

export default function JobOptions({option, currWorkplaceTags, currTypeTags, handleTagClick}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative min-w-[8rem] md:min-w-[10rem] mr-3 text-left' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className='flex justify-between buttonFilter font-normal fontVarNormal w-full' >
        <p className='text-sm mr-2'>{option.title}</p>
        <div className={`${isOpen? 'rotate-180' : 'rotate-0'} duration-300 w-5 h-5`}>
          <Image src='/shared/ic-arrow-down.svg' alt='arrow icon' width={20} height={20} />
        </div>
      </button>
      
      <div className={`${isOpen? 'max-h-[12rem] visible' : 'max-h-0 invisible'} bg-white flex flex-col rounded-lg border-[1px] border-gray-200 absolute mt-2 w-full duration-200 overflow-hidden px-1 z-10`}>
      { option.options.map((subOption, index) => (
        <button key={index} className='flex items-center text-sm font-normal fontVarNormal border-0 even:bg-gray-100 px-2' onClick={() => {handleTagClick(subOption, option.title)}}>
          <div className={`${currTypeTags.includes(subOption) || currWorkplaceTags.includes(subOption) ? 'bg-gray-500' : ''} border-[1px] rounded-sm border-gray-500 h-4 w-4 mr-2 p-0.5`}>
            <Image src='/shared/ic-check.svg' alt='check icon' width={12} height={12} style={{ visibility: (currTypeTags.includes(subOption) || currWorkplaceTags.includes(subOption) ? 'visible' : 'hidden') }} />
          </div>
          <p className='text-sm text-left'>{ subOption }</p>
        </button>
      ))}
      </div>
    </div>
  )
}
