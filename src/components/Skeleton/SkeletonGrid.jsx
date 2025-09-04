import { useState } from "react";
import { BounceLoader } from "react-spinners";

const SkeletonGrid = () => {
    
 const color = "black";
 const [loading] = useState(true)
  return (
    <div className="w-full ">
      <div className="w-1/3 bg-gray-400 h-4  mb-4"></div>
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-400 flex items-center justify-center lg-h-60  h-32 w-full rounded-md">
          <BounceLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className="bg-gray-400 flex items-center justify-center lg-h-60  h-32 w-full rounded-md">
          {" "}
          <BounceLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className="bg-gray-400 flex items-center justify-center lg-h-60  h-32 w-full   rounded-md">
          {" "}
          <BounceLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className="bg-gray-400 flex items-center justify-center lg-h-60  h-32 w-full  rounded-md">
          {" "}
          <BounceLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className="bg-gray-400 flex items-center justify-center lg-h-60  h-32 w-full rounded-md">
          {" "}
          <BounceLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <div className="bg-gray-400 flex items-center justify-center lg-h-60  h-32 w-full   rounded-md">
          {" "}
          <BounceLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
};

export default SkeletonGrid;