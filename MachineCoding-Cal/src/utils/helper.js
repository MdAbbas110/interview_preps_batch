export const updateComments = (comments, targetId, newComment) => {
  const commentCopy = JSON.parse(JSON.stringify(comments));

  for (const comments of commentCopy) {
    if (comments.id === targetId) {
      comments.subComments.push({
        id: new Date().getTime(),
        comment: newComment,
        subComments: [],
      });
    }

    if (comments.subComments.length > 0) {
      comments.subComments = updateComments(
        comments.subComments,
        targetId,
        newComment
      );
    }
  }
  return commentCopy;
};
