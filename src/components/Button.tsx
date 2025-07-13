import React from 'react';

function Button({ id }: { id: string }) {
  return (
    <button
      id={id}
      className=' px-13 py-4 border-white border-2 bg-transparent cursor-pointer hover:bg-[#7D7D7D] '
    >
      SHOP NOW
    </button>
  );
}

export default Button;
