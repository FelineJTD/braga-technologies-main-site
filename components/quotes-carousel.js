import { useState, useEffect } from 'react';

export default function QuotesCarousel(props) {

  const [activeQuote, setActiveQuote] = useState(0)
  const count = props.children.length;
  useEffect(() => {
    const calcWidth = `${100*count}%`
    document.getElementById("quotes").style.width = calcWidth;
  }, [count]);

  const nextQuote = () => {
    document.getElementById("quotes").style.transform = `translateX(-${((activeQuote+1)%count)*100/count}%)`;
    setActiveQuote((activeQuote+1)%count);
  }

  const prevQuote = () => {
    document.getElementById("quotes").style.transform = `translateX(-${((activeQuote-1+count)%count)*100/count}%)`;
    setActiveQuote((activeQuote-1+count)%count);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 5000);
    return () => clearInterval(interval);
  });
  
  return (
    <div className='col-start-5 row-start-1 col-span-4 overflow-hidden w-full'>
      <div id='quotes' className='flex w-full duration-500'>
        {props.children}
      </div>
      <div className='flex'>
        <button 
          className='border-0 py-0 hover:text-primary duration-200'
          onClick={prevQuote}
        >
          &lt;
        </button>
        <button 
          className='border-0 py-0 hover:text-primary duration-200'
          onClick={nextQuote}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
