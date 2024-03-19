import styles from './style.module.css';

const Comment = () => {
  return (
    <div className={styles.commentContainer}>
      <div>Lorem Empsm</div>
      <div className={styles.controls}>
        <span>View Reply</span>
        <span>Add reply</span>
      </div>
    </div>
  );
};

export default Comment;
