import React from 'react'
import CommentActions from './CommentActions'
import { getLastModifiedDatetime } from '../../utils/methods'

const CommentBox = ({ data, onReplySubmit = () => { }, handleLikeDeslike = () => { } }) => {
  return (
      <div className='pl-12 mt-4 w-[100%]'>
         {data.map((comment) => <div key={comment.id}>
            <div>
               <div className='flex space-x-[0.8rem] items-center mb-1'>
                  <img 
                     className='w-[2.2rem] rounded-[50%]'
                     src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png" 
                     alt="user" 
                  />
                  <p className='cursor-pointer hover:underline font-[500]'>{comment.username}</p>
                  <p className='text-sm'>· {getLastModifiedDatetime(comment.createdAt)} ·</p>
               </div>
               <div className='pl-[3rem]'>
                  <p className='mb-1'>{comment.comment}</p>
                  <CommentActions id={comment.id} likes={comment.likes} deslikes={comment.deslikes} onReplySubmit={onReplySubmit} handleLikeDeslike={handleLikeDeslike}/>
               </div>
            </div>
            <div className='ml-[1rem] border-l-2 border-slate-500'>
               {comment?.replies && <CommentBox data={comment.replies} onReplySubmit={onReplySubmit} handleLikeDeslike={handleLikeDeslike} />}
            </div>
         </div>)}
      </div>
  )
}

export default CommentBox