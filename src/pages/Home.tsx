import { AppProvider } from "../context/AppContext";
import UserProfileWithContext from "../UserProfileWithContext";

const Home = () => {
  return (
    <AppProvider>
      <>
        <h1>Home</h1>
        <UserProfileWithContext />
      </>
    </AppProvider>
  );
};

export default Home;
