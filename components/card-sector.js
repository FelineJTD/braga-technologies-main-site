/* eslint-disable @next/next/no-img-element */
export default function CardSector({sector, selectedSectorTitle, index, isMobile=false}) {
  return (
    <div className={`${isMobile ? 'self-center mb-12 sticky top-6' : (index%2 == 0 ? 'mt-8' : '-mt-12 self-end')} ${isMobile ? (sector.title == selectedSectorTitle ? 'opacity-100 relative' : 'opacity-0 absolute') : (sector.title == selectedSectorTitle ? 'opacity-100' : 'opacity-0 translate-y-3')} w-2/3 rounded-lg border-[1px] border-gray-200 duration-300`}>
      <img src={sector.img} alt={sector.title} className='w-full aspect-[185/120] object-cover object-center rounded-t-lg' />
      <div className='flex justify-between p-2 text-gray-800'>
        <p className='text-xs lg:text-sm'>Initiative Count</p>
        <p className='text-xs lg:text-sm'>{ sector.count }</p>
      </div>
    </div>
  )
}
