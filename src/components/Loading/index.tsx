"use client";

import { OrbitSpinner } from "react-epic-spinners";

const LoadingComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <OrbitSpinner color="#6314A8" animationDuration={500} size={200} />
    </div>
  );
};

export default LoadingComponent;
