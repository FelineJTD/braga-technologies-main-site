/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Image from 'next/image'
import JobOptions from './cmp-job-options';
import Link from 'next/link';

export default function JobsSection({jobs}) {
  const [currJobs, setCurrJobs] = useState(jobs);
  const [currWorkplaceTags, setCurrWorkplaceTags] = useState([]);
  const [currTypeTags, setCurrTypeTags] = useState([]);

  const [isOpen, setIsOpen] = useState(true);

  const Options = [
    {
      title: 'Type',
      options: [
        'Full Time',
        'Part Time',
        'Project Based',
      ]
    }, {
      title: 'Location',
      options: [
        'Hybrid',
        'Remote',
        'On Site',
      ]
    }
  ]

  useEffect(() => {
    if (currTypeTags.length === 0 && currWorkplaceTags.length === 0) {
      setCurrJobs(jobs);
    } else {
      var filteredJobs = jobs;
      if (currTypeTags.length !== 0) {
        filteredJobs = filteredJobs.filter(job => {
          return (currTypeTags.includes(job.type));
        });
      };
      if (currWorkplaceTags.length !== 0) {
        filteredJobs = filteredJobs.filter(job => {
          return (currWorkplaceTags.includes(job.workplace));
        });
      };
      setCurrJobs(filteredJobs);
    } 
  }, [currWorkplaceTags, currTypeTags, jobs]);

  useEffect(() => {
    if (currTypeTags.length !== 0) {
      const filteredJobs = jobs.filter(job => {
        return (currTypeTags.includes(job.type));
      });
      setCurrJobs(filteredJobs);
    } else {
      setCurrJobs(jobs);
    }
  }, [currTypeTags, jobs]);

  const handleTagClick = (tag, type) => {
    if (type === 'Location' && currWorkplaceTags.includes(tag)) {
      setCurrWorkplaceTags(currWorkplaceTags.filter((currTag) => currTag !== tag));
    } else if (type === 'Type' && currTypeTags.includes(tag)) {
      setCurrTypeTags(currTypeTags.filter((currTag) => currTag !== tag));
    } else {
      if (type === 'Location') {
        setCurrWorkplaceTags([...currWorkplaceTags, tag])
      } else if (type === 'Type') {
        setCurrTypeTags([...currTypeTags, tag]);
      }
    }
  };

  return (
    <section className='whiteBG'>
      <div className='col-start-2 col-span-4'>
        <p className='mb-4'><b>Work at Braga</b></p>
        <h2>Explore the career paths.</h2>
      </div>
      <p className='col-start-7 col-span-4 self-end text-gray-600'>Help us to solve the world’s problems through maps, and You. Interested? Find your forte below!</p>
      <button className='self-end border-gray-600 hover:bg-gray-200 duration-200 w-12 h-10 p-0 justify-self-end' onClick={() => setIsOpen(!isOpen)}>
        <Image src='/navbar/ic-arrow-left.svg' alt='drop down icon' width={20} height={20} />
      </button>

      <div className='flex  py-3 col-start-2 col-span-10 w-full border-y-[1px] border-gray-600 my-10'>

        { Options.map((option, index) => (
          <JobOptions key={index} option={option} currTypeTags={currTypeTags} currWorkplaceTags={currWorkplaceTags} handleTagClick={handleTagClick} />
        ))}

        {/* DIVIDER */}
        <div className='min-h-full w-[1px] bg-gray-600 rounded-lg mr-3' />

        <div className='flex space-x-3 overflow-auto'>
          { currTypeTags.map((tag, index) => (
            <div key={index} className='flex items-center rounded-lg border-gray-800 border-[1px] px-3'>
              <button className='buttonPlain duration-300 h-5 w-5 hover:rotate-90 !py-0' onClick={() => handleTagClick(tag, 'Type')}>
                <Image src='/shared/ic-cross.svg' alt='cross icon' width={20} height={20} />
              </button>
              <p className='text-sm ml-2 whitespace-nowrap'>{tag}</p>
            </div>
          ))}
          { currWorkplaceTags.map((tag, index) => (
            <div key={index} className='flex items-center rounded-lg border-gray-800 border-[1px] px-3'>
              <button className='buttonPlain duration-300 h-5 w-5 hover:rotate-90 !py-0' onClick={() => handleTagClick(tag, 'Location')}>
                <Image src='/shared/ic-cross.svg' alt='cross icon' width={20} height={20} />
              </button>
              <p className='text-sm ml-2 whitespace-nowrap'>{tag}</p>
            </div>
          ))}
        </div>
        <div className='border-r-[1px] border-gray-600 h-full' />
      </div>

      <div className={`${isOpen? 'max-h-fit' : 'max-h-0'} duration-500 col-start-2 col-span-10 overflow-hidden`}>
        {
        currJobs.length === 0 ?
          <div className='relative flex space-x-8 w-full border-[1px] border-gray-300 rounded-lg p-8 items-center'>
            <div className='aspect-[2/1] w-1/2 relative'>
              <Image src='/company/empty-state.svg' alt='' height='100%' layout='fill' />
            </div>
            <div className='w-1/2 pr-8'>
              <h2 className='mb-3'>No current vacancies available at this time.</h2>
              <p className='text-gray-700'>We’ll share the news as soon as they become available. In the mean time, reach us out for other opportunities <Link href='/contact'><a className='unPrimary text-primary'>here</a></Link>.</p>
            </div>
          </div>
        : currJobs.map((job, index) => (
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
