import { useEffect } from "react";
import { useApiStore } from "./store/useApiStore";

const PostListWithAxios = () => {
  const fetchPosts = useApiStore((state) => state.fetchPosts);
  const postData = useApiStore((state) => state.postsData);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="postList">
      {postData &&
        postData.length > 0 &&
        postData.map(({ title, id }) => (
          <div key={id}>
            <h4>{title}</h4>
          </div>
        ))}
    </div>
  );
};

export default PostListWithAxios;
