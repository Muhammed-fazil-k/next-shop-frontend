import React, { PropsWithChildren } from 'react'
interface ButtonProps extends PropsWithChildren{
type:string;
}
const Button:React.FC<ButtonProps> = ({type,children}) => {
  return (
    <button type={type} className='bg-green-800 text-white px-4 py-2 my-2 rounded-sm hover:bg-green-700'>
        {children}
    </button>
  )
}

export default Button
