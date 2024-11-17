import React from 'react'
import { LANG } from '../utils/langConstant';

const About = ({ lang }) => {
  const data = LANG[lang];
  
  return (
    <div className='flex flex-col space-y-5 mt-2 p-2'>
      <div>
        <h1 className='font-bold text-2xl'>{data.title}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>{data.title2}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>{data.title3}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>{data.title4}</h1>
        <p>{data.desc}</p>
      </div>
    </div>
  )
}

export default About;