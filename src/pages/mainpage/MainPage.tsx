import CreatePost from "../../components/createPost/CreatePost";
import PostList from "../../components/postList/PostList";

const MainPage = () => {
  // console.log(news);
  return (
    <>
      <PostList></PostList>
      <CreatePost></CreatePost>
    </>
  );
};

export default MainPage;
