/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function JobsSection({jobs}) {
  const [currJobs, setCurrJobs] = useState(jobs);
  const [currTags, setCurrTags] = useState([]);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (currTags.length === 0) {
      setCurrJobs(jobs);
    } else {
      const filteredJobs = jobs.filter(job => {
        return (currTags.includes(job.workplace) || currTags.includes(job.type));
      });
      setCurrJobs(filteredJobs);
    }
  }, [currTags, jobs]);

  const handleTagClick = (tag) => {
    if (currTags.includes(tag)) {
      setCurrTags(currTags.filter((currTag) => currTag !== tag));
    } else {
      setCurrTags([...currTags, tag]);
    }
  };

  return (
    <section className='whiteBG'>
      <div className='col-start-2 col-span-4'>
        <p className='mb-4'><b>Work at Braga</b></p>
        <h2>Explore the career paths.</h2>
      </div>
      <p className='col-start-7 col-span-4 self-end'>Help us to solve the world’s problems through maps, and You. Interested? Find your forte below!</p>
      <button className='self-end border-gray-600 hover:bg-gray-200 duration-200 w-12 h-10 p-0 justify-self-end' onClick={() => setIsOpen(!isOpen)}>
        <Image src='/navbar/ic-arrow-left.svg' alt='drop down icon' width={20} height={20} />
      </button>
      <div className='flex space-x-3 py-3 col-start-2 col-span-10 w-full border-y-[1px] border-gray-600 my-10'>
        <button className='buttonFilter font-normal fontVarNormal'>Type</button>
        <button className='buttonFilter font-normal fontVarNormal' onClick={() => handleTagClick('Full Time')}>Full Time</button>
        <button className='buttonFilter font-normal fontVarNormal' onClick={() => handleTagClick('Remote')}>Remote</button>

        <button className='buttonFilter font-normal fontVarNormal'>Location</button>

        <div className='flex space-x-3'>
          { currTags.map((tag, index) => (
            <div key={index} className='buttonFilter font-normal fontVarNormal' onClick={() => handleTagClick(tag)}>{tag}</div>
          ))}
        </div>
        <div className='border-r-[1px] border-gray-600 h-full' />
      </div>
      <div className={`${isOpen? 'max-h-fit' : 'max-h-0'} duration-500 col-start-2 col-span-10 overflow-hidden`}>
        {currJobs.map((job, index) => (
          <div key={index} className='flex space-x-4 w-full mb-6 p-3 rounded-lg border-[1px] border-gray-300 hover:border-gray-500 hover:shadow-md hover:bg-white duration-200 cursor-pointer'>
            <img src={job.img} alt='' className='h-full w-28 rounded-lg object-cover' />
            <div className='flex flex-col space-y-1'>
              <h4>{job.title}</h4>
              <p>{job.type} - {job.workplace} - {job.location}</p>
              <div className='border-t-[1px] border-gray-300'/>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
