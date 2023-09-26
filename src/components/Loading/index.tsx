"use client";
import { OrbitSpinner } from "react-epic-spinners";

const LoadingComponent = () => {
  return (
    <div className="bg-primaryColor bg-opacity-5 flex items-center justify-center content-center h-screen w-screen">
      <OrbitSpinner color="#6314A8" animationduration={3000} size={150} />
    </div>
  );
};

export default LoadingComponent;
