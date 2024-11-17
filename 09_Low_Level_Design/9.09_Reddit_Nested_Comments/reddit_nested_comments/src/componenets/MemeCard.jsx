import React from 'react'

const MemeCard = ({ data }) => {

  const { url, title, author } = data
  return (
    <div className='border-2 border-[#aaa] p-4 m-4 rounded-[5px]'>
      <img className='w-64 h-[18rem]' alt="meme" src={url} />
      <hr className='border-t-2 border-[#aaa] mt-4' />
      <p className=''>By {author}</p>
    </div>
  )
}

export default MemeCard
