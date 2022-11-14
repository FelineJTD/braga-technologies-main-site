/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
// import Image from "next/image";
import JobOptions from "./cmp-job-options";
import Link from "next/link";

export default function JobsSection({ jobs }) {
  const [currJobs, setCurrJobs] = useState(jobs);
  const [currWorkplaceTags, setCurrWorkplaceTags] = useState([]);
  const [currTypeTags, setCurrTypeTags] = useState([]);

  const [isOpen, setIsOpen] = useState(true);

  const Options = [
    {
      title: "Type",
      options: ["Full Time", "Part Time", "Project Based"],
    },
    {
      title: "Location",
      options: ["Hybrid", "Remote", "On Site"],
    },
  ];

  useEffect(() => {
    if (currTypeTags.length === 0 && currWorkplaceTags.length === 0) {
      setCurrJobs(jobs);
    } else {
      var filteredJobs = jobs;
      if (currTypeTags.length !== 0) {
        filteredJobs = filteredJobs.filter((job) => {
          return currTypeTags.includes(job.type);
        });
      }
      if (currWorkplaceTags.length !== 0) {
        filteredJobs = filteredJobs.filter((job) => {
          return currWorkplaceTags.includes(job.workplace);
        });
      }
      setCurrJobs(filteredJobs);
    }
  }, [currWorkplaceTags, currTypeTags, jobs]);

  useEffect(() => {
    if (currTypeTags.length !== 0) {
      const filteredJobs = jobs.filter((job) => {
        return currTypeTags.includes(job.type);
      });
      setCurrJobs(filteredJobs);
    } else {
      setCurrJobs(jobs);
    }
  }, [currTypeTags, jobs]);

  const handleTagClick = (tag, type) => {
    if (type === "Location" && currWorkplaceTags.includes(tag)) {
      setCurrWorkplaceTags(
        currWorkplaceTags.filter((currTag) => currTag !== tag)
      );
    } else if (type === "Type" && currTypeTags.includes(tag)) {
      setCurrTypeTags(currTypeTags.filter((currTag) => currTag !== tag));
    } else {
      if (type === "Location") {
        setCurrWorkplaceTags([...currWorkplaceTags, tag]);
      } else if (type === "Type") {
        setCurrTypeTags([...currTypeTags, tag]);
      }
    }
  };

  return (
    <section className='whiteBGSmPadding'>
      <div className='col-start-2 col-span-4'>
        <p className='mb-4'>
          <b>Work at Braga</b>
        </p>
        <h2>Explore the<br />career paths.</h2>
      </div>
      <p className='col-start-7 col-span-4 self-end text-gray-600'>
        Help us to solve the world’s problems through maps, and You. Interested?
        Find your forte below!
      </p>
      <div className='flex items-center justify-center self-end border border-gray-600 w-12 h-10 p-0 justify-self-end opacity-50 rounded-lg'>
        <img
          src='/navbar/ic-arrow-left.svg'
          alt='drop down icon'
          objectFit='contain'
          objectPosition='center'
          width={20}
          height={20}
        />
      </div>

      <div
        className={`${
          isOpen ? "max-h-fit" : "max-h-0"
        } duration-500 col-start-2 col-span-10 overflow-hidden max-w-full`}
      >
        <div className='flex py-3 w-full border-y-[1px] border-gray-600 mt-10 md:my-10'>
          {Options.map((option, index) => (
            <JobOptions
              key={index}
              option={option}
              currTypeTags={currTypeTags}
              currWorkplaceTags={currWorkplaceTags}
              handleTagClick={handleTagClick}
            />
          ))}

          {/* DIVIDER */}
          <div className='min-h-full w-[1px] bg-gray-600 rounded-lg mr-3 hidden md:block' />

          <div className='space-x-3 overflow-auto hidden md:flex'>
            {currTypeTags.map((tag, index) => (
              <div
                key={index}
                className='flex items-center rounded-lg border-gray-800 border-[1px] px-3'
              >
                <button
                  className='buttonPlain duration-300 h-5 w-5 hover:rotate-90 !py-0'
                  onClick={() => handleTagClick(tag, "Type")}
                >
                  <img
                    src='/shared/ic-cross.svg'
                    alt='cross icon'
                    width={20}
                    height={20}
                  />
                </button>
                <p className='text-sm ml-2 whitespace-nowrap'>{tag}</p>
              </div>
            ))}
            {currWorkplaceTags.map((tag, index) => (
              <div
                key={index}
                className='flex items-center rounded-lg border-gray-800 border-[1px] px-3'
              >
                <button
                  className='buttonPlain duration-300 h-5 w-5 hover:rotate-90 !py-0'
                  onClick={() => handleTagClick(tag, "Location")}
                >
                  <img
                    src='/shared/ic-cross.svg'
                    alt='cross icon'
                    width={20}
                    height={20}
                  />
                </button>
                <p className='text-sm ml-2 whitespace-nowrap'>{tag}</p>
              </div>
            ))}
          </div>
          <div className='border-r-[1px] border-gray-600 h-full' />
        </div>

        {/* MOBILE VER */}
        <div className='mb-10 flex space-x-3 overflow-auto md:hidden py-3 max-w-full border-b-[1px] border-gray-600 min-h-[4rem]'>
          {currTypeTags.map((tag, index) => (
            <div
              key={index}
              className='flex items-center rounded-lg border-gray-800 border-[1px] px-3 py-1'
            >
              <button
                className='buttonPlain duration-300 h-5 w-5 hover:rotate-90 !py-0'
                onClick={() => handleTagClick(tag, "Type")}
              >
                <img
                  src='/shared/ic-cross.svg'
                  alt='cross icon'
                  width={20}
                  height={20}
                />
              </button>
              <p className='text-sm ml-2 whitespace-nowrap'>{tag}</p>
            </div>
          ))}
          {currWorkplaceTags.map((tag, index) => (
            <div
              key={index}
              className='flex items-center rounded-lg border-gray-800 border-[1px] px-3 py-1'
            >
              <button
                className='buttonPlain duration-300 h-5 w-5 hover:rotate-90 !py-0'
                onClick={() => handleTagClick(tag, "Location")}
              >
                <img
                  src='/shared/ic-cross.svg'
                  alt='cross icon'
                  width={20}
                  height={20}
                />
              </button>
              <p className='text-sm ml-2 whitespace-nowrap'>{tag}</p>
            </div>
          ))}
        </div>
        <div className='border-r-[1px] border-gray-600 h-full' />

        <div>
          {currJobs.length === 0 ? (
            <div className='relative flex flex-col md:flex-row md:space-x-8 w-full border-[1px] border-gray-300 rounded-lg p-4 md:p-8 items-center'>
              <div className='aspect-[2/1] w-full md:w-1/2 relative mb-8 md:mb-0'>
                <img src='/company/empty-state.svg' alt='' layout='fill' />
              </div>
              <div className='w-full md:w-1/2 md:pr-8'>
                <h2 className='mb-3'>
                  No current vacancies available at this time.
                </h2>
                <p className='text-gray-700'>
                  We’ll share the news as soon as they become available. In the
                  meantime, reach us out for other opportunities{" "}
                  <Link href='/contact'>
                    <a className='unPrimary text-primary'>here</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          ) : (
            currJobs.map((job, index) => (
              <div
                key={index}
                className='flex space-x-0 md:space-x-4 w-full mb-6 p-3 rounded-lg border-[1px] border-gray-300 hover:border-gray-500 hover:shadow-md hover:bg-white duration-200 cursor-pointer'
              >
                <img
                  src={job.img}
                  alt=''
                  className='h-full w-28 rounded-lg object-cover hidden md:block'
                />
                <div className='flex flex-col space-y-1'>
                  <h4>{job.title}</h4>
                  <p className='text-gray-800'>
                    {job.type} - {job.workplace} - {job.location}
                  </p>
                  <div className='border-t-[1px] border-gray-300' />
                  <p className='text-gray-700'>{job.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
