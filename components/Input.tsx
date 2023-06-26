import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}

const Input:React.FC<InputProps> = (props) => {
  return (
    <input {...props} className="border px-3 py-1 rounded-sm w-80"/>
  )
}

export default Input
