import React from 'react'

export function InputComponent({
   type = 'text',
   placeholder = 'Input',
   value,
   onChange,
   name
}) {
   return (
      <input
         name={name}
         type={type}
         placeholder={placeholder}
         onChange={onChange}
         value={value} />
   )
}
