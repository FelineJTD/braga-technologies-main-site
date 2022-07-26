/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

export default function CardSector({
  sector,
  selectedSectorTitle,
  index,
  isMobile = false,
}) {
  return (
    <div
      className={`${
        isMobile
          ? "self-center mb-12"
          : index % 2 == 0
          ? "mt-8"
          : "-mt-12 self-end"
      } ${
        isMobile
          ? sector.title == selectedSectorTitle
            ? "opacity-100 relative"
            : "opacity-0 absolute"
          : sector.title == selectedSectorTitle
          ? "opacity-100"
          : "opacity-0 translate-y-3"
      } w-2/3 rounded-lg border-[1px] border-gray-200 duration-300 bg-gray-50 bg-opacity-50 backdrop-blur`}
    >
      <div className='relative w-full aspect-[185/120]'>
        <img
          src={sector.img}
          alt={sector.title}
          className='object-cover object-center w-full h-full rounded-t-lg'
        />
      </div>
      <div className='flex justify-between p-2 text-gray-800'>
        <p className='text-xs lg:text-sm'>{sector.title}</p>
        {/* <p className='text-xs lg:text-sm'>{ sector.count }</p> */}
      </div>
    </div>
  );
}
