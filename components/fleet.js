import BusIcon from '../assets/images/homepage/icon-bus'
import CarIcon from '../assets/images/homepage/icon-car'

export default function Fleet({fleetNum, isVisible, setIsVisible, type, color, className}) {
  return (
    <div className={`${!isVisible? 'fleet-invis' : 'fleet'} ${color === 'primary'? 'fleet-bg-primary' : 'fleet-bg-secondary'} flex absolute px-3 py-2 border-[1px] border-gray-400 hover:border-gray-800 rounded-lg bg-gray-50 z-20 ${className}`} onClick={() => setIsVisible(false)}>
      { type === 'bus' ? 
        <BusIcon className={`${isVisible? 'fill-gray-800' : (color === 'primary' ? 'fill-gray-50' : 'fill-gray-800')} h-5 w-5 z-50 duration-100`} />
      : // type === 'car'
        <CarIcon className={`${isVisible? 'fill-gray-800' : (color === 'primary' ? 'fill-gray-50' : 'fill-gray-800')} h-5 w-5 z-50 duration-100`} />
      }
      <p className={`${isVisible? 'text-gray-800' : 'text-gray-50'} text-sm ml-2 duration-200`}>Fleet #{fleetNum}</p>
    </div>
  )
}
