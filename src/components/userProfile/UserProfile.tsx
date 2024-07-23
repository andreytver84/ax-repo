import { useFetch } from "../../hooks/useFetch";

const UserProfile = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  if (loading) {
    return <div>User profile is Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return null;
  }
  return (
    <>
      <h3>UserProfile</h3>
      <h4>name: {data[0].name}</h4>
      <p>username: {data[0].username}</p>
      <p>phone: {data[0].phone}</p>
      <p>website: {data[0].website}</p>
      <p>email: {data[0].email}</p>
    </>
  );
};

export default UserProfile;
