import React from 'react'

const Reply = ({ parentId, onSubmit = () => { }, setShowInputBox = () => { } }) => {

   const handleSubmit = (e) => {
      onSubmit(e, parentId)
      setTimeout(() => setShowInputBox(false), 200)
   }

  return (
    <div className='w-[650px] border border-grey absolute top-8 z-10 bg-slate-100 p-4 cursor-default'>
      <span onClick={() => setShowInputBox(false)} className='absolute right-[-8px] top-[-14px] border border-[#dad] text-[8px] px-[7px] py-[5px] rounded-[25px] cursor-pointer'>❌</span>
      <form onSubmit={handleSubmit} className=''>
         <label>
            Comment:
            <input className='w-[100%]' type="text" name="comment" />
         </label>
         <div className='flex mt-4 items-center justify-between'>
            <label>
               Username:
               <input className='ml-2' type="text" name="username"/>
            </label>
            <button className='border bg-[#ba3a56] text-white rounded-[5px] px-2 py-1' type="submit">Reply</button>
         </div>
      </form>
    </div>
  )
}

export default Reply