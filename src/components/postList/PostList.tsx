import PostItem from "../postItem/PostItem";
import styles from "./PostList.module.scss";
import { useFetch } from "../../hooks/useFetch";

const BASE_URL = import.meta.env.VITE_NEWS_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const PostList = () => {
  const { news } = useFetch(`${BASE_URL}latest-news?apiKey=${API_KEY}`, {});

  //console.log(news);

  return (
    <>
      <h1>PostList</h1>
      <ul className={styles.postList}>
        {news &&
          news.length > 0 &&
          news.map((post) => (
            <li>
              <PostItem post={post} key={post.id}></PostItem>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PostList;
