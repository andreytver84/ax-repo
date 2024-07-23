import { FC } from "react";
import styles from "./PostItem.module.scss";

interface IPost {
  id: string | number;
  title: string;
  description: string;
}
interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.listItem}>
      <h3>{post?.title}</h3>
      <p>{post?.description}</p>
    </div>
  );
};

export default PostItem;
