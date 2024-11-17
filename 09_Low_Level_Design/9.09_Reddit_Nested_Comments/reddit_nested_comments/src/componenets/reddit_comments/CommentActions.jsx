import React from 'react'
import Reply from './Reply'

const CommentActions = ({ likes=0, deslikes=0, id, onReplySubmit = () => { }, handleLikeDeslike = () => { } }) => {
  const [showInputBox, setShowInputBox] = React.useState(false)
  
  const handleAddReplyInputBox = () => {
   setShowInputBox((prev) => !prev)
  }

  return (
    <div className='flex space-x-[1rem]'>
      <div>
         <span className='cursor-pointer mr-[0.7rem]' onClick={() => handleLikeDeslike(id, 'like')}>👍 {likes}</span>
         <span className='cursor-pointer' onClick={() => handleLikeDeslike(id, 'deslike')}>👎 {deslikes}</span>
      </div>
      <div className='cursor-pointer relative'>
         <span onClick={handleAddReplyInputBox}>💬 Reply</span>
         {showInputBox && <Reply parentId={id} onSubmit={onReplySubmit} setShowInputBox={setShowInputBox}/>}
      </div>
      <div className='cursor-pointer'>
         <span>🏆 Award</span>
      </div>
      <div className='cursor-pointer'>
         <span>↗️ Share</span>
      </div>
      <div className='cursor-pointer'>
         <span>...</span>
      </div>
    </div>
  )
}

export default CommentActions