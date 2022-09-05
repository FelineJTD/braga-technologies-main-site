import { useState, useRef, useEffect } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Team({departments, page}) {
  const [selectedDepartmentIdx, setSelectedDepartmentIdx] = useState(0);
  const [departmentLength, _setDepartmentLength] = useState(departments.length);

  const deptRef = useRef([]);
  const deptContainer = useRef(null);
  const bottomRef = useRef(null);
  
  useEffect(() => {
    deptRef.current = deptRef.current.slice(0, departmentLength);
  }, [departmentLength]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bottomRef.current.getBoundingClientRect().bottom > 0) {
        setSelectedDepartmentIdx((selectedDepartmentIdx + 1)%departmentLength);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [departmentLength, selectedDepartmentIdx]);

  useEffect(() => {
    const position = deptRef.current[selectedDepartmentIdx].offsetLeft;
    deptContainer.current.scrollTo({
      left: position - deptContainer.current.clientWidth/2,
      behavior: 'smooth',
    });
  }, [selectedDepartmentIdx]);
  return (
    <>
      {/* Team Overview */}
      <div className='lg:col-start-4 col-span-6 w-full dividerBlack' />
      <div ref={deptContainer} className='lg:col-start-4 col-span-6 w-full flex space-x-3 justify-between overflow-y-auto pb-3 relative no-scrollbar'>
        { departments.map((department, index) => (
          <button 
            ref={el => deptRef.current[index] = el} key={index} 
            className={`${selectedDepartmentIdx === index ? 'buttonSelectionTimedSelected' : 'buttonSelection'} font-normal relative min-w-[8rem]`} 
            onClick={() => setSelectedDepartmentIdx(index)}
          >{department.title}</button>
        )) }
      </div>

      <div className='lg:col-start-4 col-span-6 w-ful relative mb-8'>
        { departments.map((department, index) => (
          <img key={index} src={department.image} alt='' className={` 
            ${index === selectedDepartmentIdx ? 'opacity-100 z-20' : 'opacity-50 z-10'} 
            w-full aspect-[600/260] mt-4 rounded-lg object-cover animate-fade-in absolute duration-500`} />
        )) }
        <div className='w-full relative aspect-[600/260] z-0 mt-8' />
        <p ref={bottomRef} className='text-xs text-gray-600'>{departments[selectedDepartmentIdx].desc}</p>
      </div>
    </>
  )
}
