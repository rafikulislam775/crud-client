import { Outlet, useLoaderData } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import GetData from "../GetData/GetData";
import { useState } from "react";

const Home = () => {
  const loadedData = useLoaderData();
  const [getInput, setGetInput] = useState(loadedData);
  console.log(loadedData);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-3">
        {getInput.map((data) => (
          <GetData
            key={data._id}
            setGetInput={setGetInput}
            data={data}
          ></GetData>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
