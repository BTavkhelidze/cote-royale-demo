import React from 'react';

function Button({
  id,
  text = ' SHOP NOW',
  className,
}: {
  id?: string;
  text?: string;
  className?: string;
}) {
  return (
    <button
      id={id}
      className={` px-13 py-4 border-white border-2 uppercase font-bold bg-transparent cursor-pointer hover:bg-[#7D7D7D] ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
