import React, { useState } from 'react'

const AccordionItem = ({ isOpen, title, body, setIsOpen = () => { } }) => {
  return (
    <div className='border border-gray rounded-[2px]'>
      <div className='font-bold p-2 bg-slate-100 flex justify-between cursor-pointer' onClick={setIsOpen}>
         <span>{title}</span>
         <span>{isOpen ? '👆🏻' : '👇🏻'}</span>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
        {isOpen && <p className='p-2'>{body}</p>}
      </div>
    </div>
  )
}

export default AccordionItem