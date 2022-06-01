import React from "react";

export const Loader = () => {
  return (
    <div className="loader text-center">
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
