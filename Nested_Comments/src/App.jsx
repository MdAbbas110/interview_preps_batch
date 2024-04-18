import React, { useState } from 'react';
import Comment from './componrnrts/commnets';
import { updateComments } from '../utils/helper';
import { ScreenWrapper } from '../../../App';
import ImTextField from '../../../components/TextField/ImTextfield';
import styles from './style.module.css';

const MainPage = () => {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) => {
    const updatedComments = [
      ...comments,
      {
        id: new Date().getTime(), // Generate a unique ID
        comment: newComment,
        subComments: [],
      },
    ];
    setComments(updatedComments);
  };

  const deleteComment = (commentId) => {
    const filteredComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(filteredComments);
  };

  const addNewReply = (targetId, newComment) => {
    const updatedComments = updateComments(comments, targetId, newComment);
    setComments(updatedComments);
  };

  const updateComment = (commentId, updatedComment) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, comment: updatedComment };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <ScreenWrapper>
      <div
        className={styles.scroll}
        style={{ height: '100vh', overflowY: 'auto' }}
      >
        <AddTopicForm addNewComment={addNewComment} />
        <Comment
          commentData={comments}
          addNewReply={addNewReply}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      </div>
    </ScreenWrapper>
  );
};

const AddTopicForm = ({ addNewComment }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() !== '') {
      addNewComment(topic);
      setTopic('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <ImTextField
        type="text"
        placeholder="Add a new topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className={styles.topicInput}
      />
      <button className={styles.btnAdd} type="submit">
        Add Topic
      </button>
    </form>
  );
};

export default MainPage;

