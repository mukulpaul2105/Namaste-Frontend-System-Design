import React from 'react'
import CommentBox from './CommentBox'
import { v4 } from 'uuid'
import { nestedComments } from '../../utils/nestedComments';

const Comments = () => {
   const [comments, setComments] = React.useState(JSON.parse(localStorage.getItem('nested-comments')) || nestedComments);

   const onReplySubmit = (e, parentId) => {
      e.preventDefault();
      const formData = new FormData(e.target)
      const newComment = {
         id: v4(),
         username: formData.get('username'),
         comment: formData.get('comment'),
         createdAt: new Date(),
         likes: 0,
         deslikes: 0,
         replies: []
      }
      const addReply = (commnts) => {
         return commnts.map(cmnt => {
            console.log(cmnt)
            if (cmnt.id === parentId) {
               return {
                  ...cmnt,
                  replies: [...cmnt.replies, newComment]
               }
            } else if (cmnt?.replies?.length > 0) {
               return {
                  ...cmnt,
                  replies: addReply(cmnt.replies)
               }
            }
            return cmnt
         })
      }
      const newComments = addReply(comments)
      localStorage.setItem('nested-comments', JSON.stringify(newComments))
      setComments(newComments)
   }

   const handleLikeDeslike = (parentId, type) => {
      console.log("called: parentId: type: ", parentId, type)
      const likeDeslikeCount = (commnts) => {
         return commnts.map(cmnt => {
            console.log(cmnt)
            if (cmnt.id === parentId) {
               return {
                  ...cmnt,
                  likes: type === 'like' ? cmnt.likes + 1 : cmnt.likes,
                  deslikes: type === 'deslike'  ? cmnt.deslikes + 1: cmnt.deslikes
               }
            } else if (cmnt?.replies?.length > 0) {
               return {
                  ...cmnt,
                  replies: likeDeslikeCount(cmnt.replies)
               }
            }
            return cmnt
         })
      }
      const newComments = likeDeslikeCount(comments)
      localStorage.setItem('nested-comments', JSON.stringify(newComments))
      setComments(newComments)
   }

   return (
      <div className="my-20 overflow-scroll">
         <CommentBox data={comments} onReplySubmit={onReplySubmit} handleLikeDeslike={handleLikeDeslike} />
      </div>
   )
}

export default Comments;