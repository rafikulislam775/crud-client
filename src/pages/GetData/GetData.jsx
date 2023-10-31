const GetData = ({ data }) => {
  const { img, category, price, rating } = data;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" border p-2 text-center text-2xl font-bold rounded-lg ">
            {category}
          </h2>
          <div className="flex justify-around border">
            <div>{rating}</div>
            <div> $ {price}</div>
          </div>

          <div className="flex justify-between">
            <button className="btn btn-sm btn-outline btn-info">
              Update Now
            </button>
            <button className="btn btn-error btn-sm btn-outline">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetData;
