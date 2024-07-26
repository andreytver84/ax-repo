import { useEffect, useState } from "react";
import { api } from "./axios";

const PostListWithAxios = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    api.get().then((response) => setPostData(response.data));
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
