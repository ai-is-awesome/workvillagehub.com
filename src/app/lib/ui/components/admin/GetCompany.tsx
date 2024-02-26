"use client";
import getCompanies from "@/app/lib/actions/getCompanies";
import { useEffect, useState } from "react";

function GetCompany() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getCompanies().then((d) => {
      console.log(d);
      setData(d);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-3">
        <div>Company id</div>
        <div>Company logo url</div>
        <div>Company name</div>
        {data.map((company) => {
          return (
            <>
              <div>{company.id}</div>
              <div>{company.companyLogoUrl}</div>
              <div>{company.companyName}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default GetCompany;
