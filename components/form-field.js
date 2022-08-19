import { useRef } from "react";

export default function FormField({ field, className }) {

  if (field.type === 'text') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <input type={field.type} name={field.name} id={field.name} placeholder=' ' className='rounded-lg pt-6 pb-2 px-3 w-full bg-white border-[1px] border-gray-400 peer' />
        <label className='text-input' htmlFor={field.name}>
            {field.label}
        </label>
      </div>
    );
  } else if (field.type === 'select') {
    return (
      null
    );
  } else if (field.type === 'textarea') {
    return (
      <div className={`w-full col-span-${field.size} ${className}`}>
        <label className='text-sm' htmlFor={field.name}>{field.label}<br/></label>
        <textarea name={field.name} id={field.name} placeholder={field.placeholder} className='input' />
      </div>
    );
  } else {
    return (null);
  }
}