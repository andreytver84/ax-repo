import { useEffect, useState } from "react";
import { api } from "./axios";
import { useApiStore } from "../store/useApiStore";

const PostListWithAxios = () => {
  const [postData, setPostData] = useState([]);

  const fetchPosts = useApiStore((state) => state.fetchPosts);
  const getData = useApiStore((state) => state.getPosts);

  useEffect(() => {
    const fetshget = async () => {
      await fetchPosts();
      setPostData(getData());
    };
    fetshget();
  }, []);

  return (
    <div className="postList">
      <button
        onClick={() => {
          console.log(getData());
          setPostData(getData());
        }}
      >
        click
      </button>
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
