import { useState } from 'react';
import styles from './style.module.css';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

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
        <Textarea
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={styles.replyBox}
          type="text"
          placeholder="enter you savage reply!"
          minRows={3}
        />
      )}
    </div>
  );
};

const Comment = ({ commentData, addNewReply }) => {
  return (
    <Box
      height="auto"
      width={'auto'}
      my={4}
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      {commentData.map((comment) => (
        <CommentItem
          comment={comment}
          key={comment.id}
          addNewReply={addNewReply}
        />
      ))}
    </Box>
  );
};

export default Comment;