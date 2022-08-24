export default function FormField({ field, className }) {
  if (field.type === 'text') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <input type={field.type} name={field.name} id={field.name} placeholder=' ' className='text-input peer' required />
        <label className='text-input-label' htmlFor={field.name}>
          {field.label}
        </label>
      </div>
    );

  } else if (field.type === 'select') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <select name={field.name} id={field.name} className='select-input' required>
          <option value='' disabled selected>{field.label}</option>
          {field.options.map((option, index) => (
            <option key={index} value={option} className='text-gray-600'>{option}</option>
          ))}
        </select>
      </div>
    );

  } else if (field.type === 'textarea') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <textarea name={field.name} id={field.name} placeholder={field.placeholder} className='text-input peer placeholder:italic placeholder:text-sm placeholder:text-gray-500' required maxLength={10000} />
        <label className='textarea-input-label' htmlFor={field.name}>{field.label}</label>
      </div>
    );

  } else if (field.type === 'checkbox') {
    return (
      <div className={`w-full col-span-${field.size} relative ${className}`}>
        <input type={field.type} name={field.name} id={field.name} placeholder=' ' className='accent-gray-600' defaultChecked={field.checked} />
        <label className='text-sm ml-2' htmlFor={field.name}>
          {field.label}
        </label>
      </div>
    );

  } else {
    return (null);
  }
}