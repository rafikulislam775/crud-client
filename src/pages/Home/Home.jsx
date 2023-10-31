import { Outlet, useLoaderData } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import GetData from "../GetData/GetData";

const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-3">
        {loadedData.map((data) => (
          <GetData key={data._id} data={data}></GetData>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
