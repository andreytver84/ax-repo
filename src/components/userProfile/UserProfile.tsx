import { FC } from "react";
import { useFetch } from "../../hooks/useFetch";

interface IUser {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
  email: string;
}

interface IUserlist {
  users: IUser[];
}

const UserProfile: FC = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  const users: IUserlist = data;

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
      <h4>name: {users[0].name}</h4>
      <p>username: {users[0].username}</p>
      <p>phone: {users[0].phone}</p>
      <p>website: {users[0].website}</p>
      <p>email: {users[0].email}</p>
    </>
  );
};

export default UserProfile;
