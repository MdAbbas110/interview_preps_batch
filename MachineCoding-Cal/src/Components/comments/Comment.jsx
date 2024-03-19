import { useState } from 'react';
import styles from './style.module.css';

const CommentItem = ({ comment, addNewReply }) => {
  const [showReply, toggleReply] = useState(false);
  const [showAddReply, toggleAddReply] = useState(false);

  const addCommentsUtils = (e) => {
    const newComment = e.target.value;
    addNewReply(comment.id, newComment);
    toggleAddReply(false);
    toggleReply(true);
  };

  const handleBlur = (e) => {
    addCommentsUtils(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addCommentsUtils(e);
    }
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.details}>
        <div>
          <h3>{comment.comment}</h3>
        </div>
        <div className={styles.controls}>
          {comment.subComments.length > 0 && (
            <span onClick={() => toggleReply(!showReply)}>View Reply</span>
          )}

          <span onClick={() => toggleAddReply(!showAddReply)}>Add Reply</span>
        </div>
      </div>
      {showReply && (
        <Comment commentData={comment.subComments} addNewReply={addNewReply} />
      )}
      {showAddReply && (
        <input
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={styles.replyBox}
          type="text"
          placeholder="enter you savage reply!"
        />
      )}
    </div>
  );
};

const Comment = ({ commentData, addNewReply }) => {
  return (
    <>
      {commentData.map((comment) => (
        <CommentItem
          comment={comment}
          key={comment.id}
          addNewReply={addNewReply}
        />
      ))}
    </>
  );
};

export default Comment;
