import { Outlet, useLoaderData } from "react-router-dom";
import UserInput from "../UserInput/UserInput";

const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <UserInput></UserInput>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
