import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
}
const Button:React.FC<ButtonProps> = ({children,...props}) => {
  return (
    <button {...props} className='bg-green-800 text-white px-4 py-2 my-2 rounded-sm hover:bg-green-700'>
        {children}
    </button>
  )
}

export default Button
