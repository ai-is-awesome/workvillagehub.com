"use client";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getLocations } from "../../actions/Job";
import { transformLocation } from "../../utils/transform";

export const LocationSelect = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocations().then((res) => {
      setLocation(res.map(transformLocation));
    });
  }, []);
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={<p>Select Popular Techhubs</p>} />
      </SelectTrigger>
      <SelectContent>
        {location?.map((location) => (
          <SelectItem key={location.id} value={location.id}>
            {`${location.city}, ${location.country}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
