import commentsData from './data/comments';
import Comment from './Components/comments/Comment';
import { useState } from 'react';
import { updateComments } from './utils/helper';

function App() {
  const [comments, setComment] = useState(commentsData);
  const addNewReply = (targetId, newComment) => {
    const newUpdateComment = updateComments(comments, targetId, newComment);
    setComment(newUpdateComment);
  };

  return (
    <>
      <Comment commentData={comments} addNewReply={addNewReply} />
    </>
  );
}

export default App;
