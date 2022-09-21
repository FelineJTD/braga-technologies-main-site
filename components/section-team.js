import { useState, useRef, useEffect } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function Team({departments, page}) {
  const [selectedDepartmentIdx, setSelectedDepartmentIdx] = useState(0);
  const [departmentLength, _setDepartmentLength] = useState(departments.length);

  const deptRef = useRef([]);
  const deptContainer = useRef(null);
  const bottomRef = useRef(null);

  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(deptContainer.current);
  });

  useEffect(() => {
    if (isVisible) {
      setSelectedDepartmentIdx(0);
    } 
  }, [isVisible]);
  
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
  }, [departmentLength, selectedDepartmentIdx, bottomRef]);

  useEffect(() => {
    const position = deptRef.current[selectedDepartmentIdx].offsetLeft;
    deptContainer.current.scrollTo({
      left: position - deptContainer.current.clientWidth/2,
      behavior: 'smooth',
    });
  }, [selectedDepartmentIdx]);

  return (
    <>
      <div className={`${page === 'career' ? 'lg:col-start-4 col-span-6' : 'col-start-2 col-span-10'} w-full dividerBlack`} />
      <div ref={deptContainer} className={`${page === 'career' ? 'lg:col-start-4 col-span-6' : 'col-start-2 col-span-10'} w-full flex space-x-3 justify-between overflow-y-auto pb-3 relative no-scrollbar`}>
        { departments.map((department, index) => (
          <button 
            ref={el => deptRef.current[index] = el} key={index} 
            className={`${selectedDepartmentIdx === index ? 'buttonSelectionTimedSelected' : 'buttonSelection'} ${page === 'career' ? 'min-w-[6rem]' : 'min-w-[6rem] md:min-w-[14%]'} font-normal relative`} 
            onClick={() => setSelectedDepartmentIdx(index)}
          >{department.title}</button>
        )) }
      </div>

      <div className={`${page === 'career' ? 'lg:col-start-4 col-span-6' : 'col-start-2 col-span-10'} w-ful relative mb-8`}>
        { departments.map((department, index) => (
          <img key={index} src={department.image} alt='' className={` 
            ${index === selectedDepartmentIdx ? 'opacity-100 z-20' : 'opacity-50 z-10'} 
            w-full aspect-[600/260] mt-4 rounded-lg object-cover animate-fade-in absolute duration-500`} />
        )) }
        <div className='w-full relative aspect-[600/260] z-0 mt-8' />
        { page === 'career' && (
          <p ref={bottomRef} className='text-xs text-gray-600'>{departments[selectedDepartmentIdx].desc}</p>
        )}
        { page === 'culture' && (
          <>
            <h5 className='mb-3'>{departments[selectedDepartmentIdx].title}</h5>
            <div ref={bottomRef} className='w-full flex space-x-6'>
              <p className=' w-1/2 text-xs text-gray-700'>{departments[selectedDepartmentIdx].teams}</p>
              <p className='w-1/2 text-xs text-gray-700'>{departments[selectedDepartmentIdx].desc}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
