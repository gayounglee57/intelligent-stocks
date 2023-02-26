import React from "react";

export const Card = ({ title, emoji }) => (
  <div className="m-4 p-6 text-left text-inherit max-w-xs border rounded-lg">
    <h2 className="text-primary text-lg mb-1">{title} &#9432;</h2>
    <p className="text-7xl ">{emoji}</p>
  </div>
);
