import PostItem from "../postItem/PostItem";
import styles from "./PostList.module.scss";
import { useFetch } from "../../hooks/useFetch";

const BASE_URL = import.meta.env.VITE_NEWS_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const PostList = () => {
  const { data, error, loading } = useFetch(
    `${BASE_URL}latest-news?apiKey=${API_KEY}`,
    {}
  );

  console.log("our data", data);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <h1>PostList</h1>

      <ul className={styles.postList}>
        {data &&
          data.news.map((post: object) => (
            <li key={`${post.id}li`}>
              <PostItem post={post} key={post.id}></PostItem>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PostList;
