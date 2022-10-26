import Image from 'next/image'

export default function Chip({isVisible, setIsVisible, icon='/homepage/chip-icons/icon-location.svg', text, color, className}) {
  console.log(icon);
  return (
    <div className={`${!isVisible? 'fleet-invis' : 'fleet'} ${color == 'primary' ? 'bg-gray-50' : 'bg-[#FFCE1E]'} fleet-bg-primary flex absolute px-3 py-2 border-[1px] border-gray-400 hover:border-gray-800 rounded-lg z-20 shadow-sm animate-sideways ${className}`} onClick={() => setIsVisible(false)}>
      <Image src={icon} alt='' height={20} width={20} />
      <p className='text-gray-800 text-sm ml-2 duration-200'>{text}</p>
    </div>
  )
}
