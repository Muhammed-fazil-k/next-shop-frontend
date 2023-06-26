import React from "react";

interface InputProps{
    type:string;
}

const Input:React.FC<InputProps> = ({type}) => {
  return (
    <input type={type} className="border px-3 py-1 rounded-sm w-80"/>
  )
}

export default Input
