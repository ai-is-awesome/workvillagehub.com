"use client";
import React, { useEffect, useState } from "react";

export const RenderDbSchema = ({ cb }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    cb().then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);
  let columns = null;
  if (data.length > 0) {
    columns = Object.keys(data[0]);
  }
  console.log("Columns : ", columns);
  if (columns !== null) {
    return (
      <div>
        <p>The data item retrieved successfully</p>
        <div className={`grid grid-cols-${columns.length}`}>
          {columns.map((column) => {
            return <div key={column}>{column}</div>;
          })}
          {data.map((item) => {
            return columns.map((column) => {
              return <div key={item["id"]}>{item[column]}</div>;
            });
          })}
        </div>
      </div>
    );
  }
};
