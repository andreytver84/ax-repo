import styles from "./PostItem.module.scss";

const PostItem = (data) => {
  const postData = data.post;
  return (
    <div className={styles.listItem}>
      <h3>{postData.title}</h3>
      <p>{postData.description}</p>
    </div>
  );
};

export default PostItem;
