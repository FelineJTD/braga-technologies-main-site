export default function CardSolution({solution, isDarkMode=false}) {
  return (
    <div className={`snap-start flex flex-col space-y-2 min-w-[287px] w-full rounded-lg p-3 border-2 ${isDarkMode? 'border-gray-600' : 'border-gray-200'}`}>
      <div className='bg-gray-200 w-full h-24'/>
      <h5>{solution.title}</h5>
      <p className='text-sm'>{solution.desc}</p>
      <div className='min-h-[40px] flex-grow' />
      <div className='flex justify-between justify-self-end items-center'>
        <button className={`border-[1px] ${isDarkMode? 'border-white' : 'border-black'}`}>See Solution</button>
        <p>{solution.type}</p>
      </div>
    </div>
  )
}
