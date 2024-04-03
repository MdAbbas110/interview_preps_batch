import { useState } from 'react';
import styles from './style.module.css';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const CommentItem = ({ comment, addNewReply }) => {
  const [showReply, setShowReply] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);

  const toggleReply = () => setShowReply(!showReply);
  const toggleAddReply = () => setShowAddReply(!showAddReply);

  const addCommentsUtils = (e) => {
    const newComment = e.target.value.trim(); // Remove leading and trailing whitespace
    if (newComment) {
      addNewReply(comment.id, newComment);
      setShowAddReply(false);
      setShowReply(true);
    }
  };

  const handleBlur = (e) => {
    addCommentsUtils(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior (form submission)
      addCommentsUtils(e); // Call the function to add comment
    }
  };

  const handleCommentClick = () => {
    toggleAddReply();
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.details} onClick={handleCommentClick}>
        <div>
          <h3>{comment.comment}</h3>
        </div>
        <div className={styles.controls}>
          {comment.subComments.length > 0 && (
            <span onClick={toggleReply}>
              <ArrowDropDownIcon />
            </span>
          )}

          <span className="flex items-center" onClick={toggleAddReply}>
            Reply <DriveFileRenameOutlineIcon />
          </span>
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
          placeholder="Add a new note..."
          minRows={3}
        />
      )}
    </div>
  );
};

const Comment = ({ commentData, addNewReply }) => {
  return (
    <Box>
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
