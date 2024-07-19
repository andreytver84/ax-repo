import CreatePost from "../../components/createPost/CreatePost";
import PostList from "../../components/postList/PostList";
import UserProfile from "../../components/userProfile/UserProfile";

const MainPage = () => {
  // console.log(news);
  return (
    <>
      <PostList></PostList>
      <CreatePost></CreatePost>
      <UserProfile></UserProfile>
    </>
  );
};

export default MainPage;
