import React, { useState } from 'react';
import { Box } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AddIcon from '@mui/icons-material/Add';
import ImTextField from '../../../components/TextField/ImTextfield';
import styles from './style.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CommentItem = ({
  comment,
  addNewReply,
  deleteComment,
  updateComment,
}) => {
  const [showReply, setShowReply] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const toggleReply = () => setShowReply(!showReply);
  const toggleAddReply = () => setShowAddReply(!showAddReply);
  const toggleEdit = () => setIsEditing(!isEditing);

  const addCommentsUtils = (e) => {
    const newComment = e.target.value.trim();
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
      e.preventDefault();
      addCommentsUtils(e);
    }
  };

  const handleEdit = () => {
    setEditedComment(comment.comment);
    toggleEdit();
  };

  const handleSaveEdit = () => {
    updateComment(comment.id, editedComment);
    toggleEdit();
  };

  const handleDelete = () => {
    deleteComment(comment.id);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.details}>
        {isEditing ? (
          <div>
            <ImTextField
              type="text"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <button className={styles.btnAdd} onClick={handleSaveEdit}>
              Save
            </button>
          </div>
        ) : (
          <>
            <div className={styles.iconPlus}>
              <div onClick={toggleReply}>
                {comment.subComments.length > 0 && <AddIcon />}
              </div>
              <h3>{comment.comment}</h3>
            </div>
            <div className={styles.controls}>
              {comment.subComments.length > 0 && (
                <span onClick={toggleReply}>
                  <ArrowDropDownIcon />
                </span>
              )}
              <span className="flex items-center" onClick={toggleAddReply}>
                <DriveFileRenameOutlineIcon />
              </span>
              <button className={styles.btnAdd} onClick={handleEdit}>
                Edit
              </button>
              <button className={styles.btnAdd} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
      {showReply && (
        <Comment
          commentData={comment.subComments}
          addNewReply={addNewReply}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      )}
      {showAddReply && (
        <ImTextField
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={styles.replyBox}
          type="text"
          placeholder="Add a new note..."
          minRows={3}
          onChange={(e) => {
            console.log('------ :', e.target.value);
          }}
        />
      )}
    </div>
  );
};

const Comment = ({
  commentData,
  addNewReply,
  deleteComment,
  updateComment,
}) => {
  const handleDelete = (commentId) => {
    deleteComment(commentId);
  };

  const handleEdit = (commentId, updatedComment) => {
    updateComment(commentId, updatedComment);
  };
  return (
    <Box>
      {commentData.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          addNewReply={addNewReply}
          deleteComment={deleteComment}
          updateComment={updateComment}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </Box>
  );
};

export default Comment;
