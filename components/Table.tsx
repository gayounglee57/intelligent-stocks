import React from "react";
import { Card } from "./Card";

export const Table = () => (
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-8 pt-10">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
