import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const accordionData = [
  {
    id: 0,
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  },
  {
    id: 1,
    title: "Accordion Item #2",
    body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  },
  {
    id: 2,
    title: "Accordion Item #3",
    body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  }
]

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return <div className='w-[50%] m-auto mt-10'>
    {accordionData.map((item) => (
      <AccordionItem 
        key={item.id}
        isOpen={item.id === openIndex} 
        title={item.title} 
        body={item.body} 
        setIsOpen={() => setOpenIndex(openIndex === item.id ? null : item.id)}
      />
    ))}
  </div>
}

export default Accordion