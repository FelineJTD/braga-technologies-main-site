import { useRef } from "react";

export default function FormField({ field, className }) {

  if (field.type === 'text') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <input type={field.type} name={field.name} id={field.name} placeholder=' ' className='text-input peer' />
        <label className='text-input-label' htmlFor={field.name}>
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
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <textarea name={field.name} id={field.name} placeholder={field.placeholder} className='text-input peer placeholder:italic placeholder:text-sm placeholder:text-gray-500' />
        <label className='textarea-input-label' htmlFor={field.name}>{field.label}</label>
      </div>
    );
  } else if (field.type === 'checkbox') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <input type={field.type} name={field.name} id={field.name} placeholder=' ' className='' defaultChecked={field.checked} />
        <label className='text-sm ml-1' htmlFor={field.name}>
          {field.label}
        </label>
      </div>
    );
  } else {
    return (null);
  }
}