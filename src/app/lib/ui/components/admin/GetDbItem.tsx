"use client";
import { flattenObject } from "@/app/lib/utils/utils";
import React, { useEffect, useState } from "react";

export const RenderDbSchema = ({ cb }: { cb: () => Promise<any> }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    cb().then((data) => {
      const validData = data.map((item) => {
        return flattenObject(item);
      });

      setData(validData);
    });
  }, [cb]);
  type column = null | string[];
  let columns: column = null;
  if (data.length > 0) {
    columns = Object.keys(data[0]);
  }

  if (columns !== null) {
    const styles: React.CSSProperties = {
      gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
      display: "grid",
      overflowX: "auto",
    };

    return (
      <div>
        <p>The data item retrieved successfully</p>
        <div className="" style={styles}>
          {columns.map((column) => {
            return (
              <div className="min-w-[100px]" key={column}>
                {column}
              </div>
            );
          })}
          {data.map((item) => {
            return columns?.map((column) => {
              return (
                <div className="min-w-[100px]" key={item["id"]}>
                  {item[column]}
                </div>
              );
            });
          })}
        </div>
      </div>
    );
  }
};
