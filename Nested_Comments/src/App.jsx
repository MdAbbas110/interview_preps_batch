// import commentsData from './data/comments';
// import Comment from './Components/comments/Comment';
// import { useState } from 'react';
// import { updateComments } from './utils/helper';
import ResponsiveDrawer from './Components/comments/AsideBar';

function App() {
  // const [comments, setComment] = useState(commentsData);
  // const addNewReply = (targetId, newComment) => {
  //   const newUpdateComment = updateComments(comments, targetId, newComment);
  //   setComment(newUpdateComment);
  // };

  return (
    <>
      <ResponsiveDrawer />
    </>
  );
}

export default App;
