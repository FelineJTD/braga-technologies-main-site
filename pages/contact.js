/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";

// Data
import { LastSectionImage, Forms } from "../config/cfg-contact";

// Components
import FormField from "../components/form-field";
import Navbar from "../components/navbar";
import Script from "next/script";

export default function Contact() {
  const [currForm, setCurrForm] = useState(Forms[0]);

  const handleSubmit = async (event) => {
    setFormState("progress");
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));
    formData.title = currForm.title;
    formData.newsletter = Boolean(formData.newsletter);
    try {
      await fetch("https://panel.braga.co.id/panel/items/braga_contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
    } finally {
      setFormState("ready");
      setTimeout(() => {
        setFormState("default");
        event.target.reset();
      }, 750);
    }
  };
  const [formState, setFormState] = useState("default");

  return (
    <div>
      <Script
        async
        defer
        data-website-id='af8d7125-94a4-4649-90c9-a4ff1fb6b3a3'
        src='https://stats.braga.co.id/umami.js'
        strategy='worker'
      ></Script>
      <Head>
        <title>BragaTechnologies</title>
        <meta
          name='description'
          content='Braga Technologies brings Location Insight to help industries and organizations alike in assets monitoring, fleet management, campaign optimation, and more.'
          key='description'
        />
        <meta
          name='keywords'
          content='Braga Technologies, Braga GeoDashboard, GeoDashboard, GIS, GIS Indonesia, WEBGIS, geospatial services, Bandung technology services'
          key='keywords'
        />
      </Head>

      <Navbar color='light' />
      <main className='text-gray-900 bg-gray-50 w-full'>
        {/* 00 */}
        <section className='whiteBGSmPadding'>
          <p className='bold mb-4'>00.</p>
          <p className='col-span-4 mb-4'>Contact</p>
          <h1 className='row-start-2 col-start-4 col-span-6 mb-6'>
            Get in touch with us.
          </h1>
          <p className='row-start-3 col-start-2 col-span-2 mb-3'>Contact Us</p>
          <h2 className='row-start-3 col-span-3'>How might we help you?</h2>
          <p className='row-start-3 text-sm text-gray-600 col-span-3 mt-3'>
            See how Braga Technologies could help solve your problem through our
            geospatial knowledge and approach.{" "}
          </p>

          <div className='dividerBlack col-start-4 col-span-6 w-full mt-8' />

          {/* TYPES */}
          <div className='md:col-start-4 md:col-span-6 md:grid md:grid-cols-2 md:gap-2 flex space-x-2 overflow-auto w-full pb-3 md:pb-0'>
            {Forms.map((form, index) => (
              <button
                key={index}
                className={`${
                  currForm.title === form.title
                    ? "buttonSelectionSelected"
                    : "buttonSelection"
                } text-sm whitespace-nowrap`}
                onClick={() => setCurrForm(form)}
              >
                {form.title}
              </button>
            ))}
          </div>

          <div className='md:col-start-4 md:col-span-6 md:grid md:grid-cols-4 md:gap-3 flex flex-col space-y-2 w-full'>
            {/* INFO */}
            <div className='col-start-1 col-span-4 mt-6 mb-4 rounded-lg border-[1px] border-gray-200 bg-gray-100 p-3'>
              <p className='text-sm'>{currForm.info}</p>
            </div>

            {/* FORM */}
            <form
              className='md:col-start-1 md:col-span-4 md:grid md:grid-cols-4 md:gap-3 flex flex-col space-y-2 md:space-y-0'
              onSubmit={handleSubmit}
            >
              {currForm.form.map((field, index) => (
                <FormField field={field} key={index} />
              ))}
              <button
                className='bg-black hover:bg-primary duration-300 text-white border-0 mt-2'
                role='submit'
                disabled={formState !== "default"}
              >
                {formState === "default" ? (
                  currForm.submitLabel
                ) : (
                  <svg
                    id='check'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 100 100'
                    xmlSpace='preserve'
                    className={
                      "w-6 h-6 block mx-auto " +
                      (formState === "ready"
                        ? "ready"
                        : formState === "progress"
                        ? "progress"
                        : "")
                    }
                  >
                    <circle
                      id='circle'
                      cx='50'
                      cy='50'
                      r='46'
                      fill='transparent'
                    />
                    <polyline
                      id='tick'
                      points='25,55 45,70 75,33'
                      fill='transparent'
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div className='dividerBlack col-start-4 col-span-6 w-full mt-8 mb-10' />
        </section>

        {/* 01 */}
        <section
          className='px-6 py-14 lg:px-[10%] h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-end justify-end'
          style={{ backgroundImage: `url(${LastSectionImage})` }}
        >
          <div className='w-full md:w-1/2 md:mb-4 flex flex-col items-end pl-[12%] md:pl-0'>
            <img
              src='/company/additional.svg'
              alt=''
              className='-mb-0.5 select-none mr-[12%] w-[20%]'
            />
            <div className='flex lg:flex-row flex-col lg:space-x-4 bg-gray-50 rounded-2xl p-6 w-full'>
              <p className='bold mb-4'>01.</p>
              <div>
                <p className='mb-4 bold'>Visit us at</p>
                <h3 className='mb-4 w-full md:w-2/3'>
                  Braga Technologies Bandung Office
                </h3>
                <div className='flex flex-col md:flex-row w-full justify-between'>
                  <address className='text-sm mb-4 w-full not-italic'>
                    Jl. Cilaki No. 23
                    <br />
                    Bandung, Indonesia.
                    <br />
                    40114
                  </address>
                  <button className='buttonLight lg:w-auto whitespace-nowrap mr-3'>
                    See on Map &gt;
                  </button>
                </div>
              </div>
            </div>
            <img
              src='/company/additional.svg'
              alt=''
              className='-mt-0.5 select-none rotate-180 self-start ml-[20%] w-[40%]'
            />
          </div>
        </section>
      </main>
      {/* https://codepen.io/splitti/pen/jLZjgx */}
      <style jsx>{`
        #tick {
          stroke: white;
          stroke-width: 6;
          transition: all 1s;
        }

        #circle {
          stroke: white;
          stroke-width: 6;
          transform-origin: 50px 50px 0;
          transition: all 1s;
        }

        .progress #tick {
          opacity: 0;
        }

        .ready #tick {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 8s ease-out forwards;
        }

        .progress #circle {
          stroke: white;
          stroke-dasharray: 314;
          stroke-dashoffset: 1000;
          animation: spin 3s linear infinite;
        }

        .ready #circle {
          stroke-dashoffset: 66;
          stroke: white;
        }

        #circle {
          stroke-dasharray: 500;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
            stroke-dashoffset: 66;
          }
          50% {
            transform: rotate(540deg);
            stroke-dashoffset: 314;
          }
          100% {
            transform: rotate(1080deg);
            stroke-dashoffset: 66;
          }
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
