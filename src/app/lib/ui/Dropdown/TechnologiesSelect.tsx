"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import getTechnology from "../../actions/getTechnology";

interface Technology {
  id: string;
  name: string;
  type: string;
}

export const TechnologiesSelect = () => {
  const [technologies, setTechnologies] = useState<null | Technology[]>(null);
  useEffect(() => {
    getTechnology().then((res) => setTechnologies(res));
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={<p>Select Technologies</p>} />
      </SelectTrigger>
      <SelectContent>
        {technologies?.map((tech) => (
          <SelectItem key={tech.id} value={tech.name}>
            {tech.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
