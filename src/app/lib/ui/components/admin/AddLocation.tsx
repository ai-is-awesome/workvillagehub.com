"use client";

import { useState } from "react";
import { Button } from "../../Button";
import {
  createCity,
  createContinent,
  createCountry,
} from "@/app/lib/actions/createLocation";
import {
  getCity,
  getContinent,
  getCountry,
} from "@/app/lib/actions/getLocation";
import { RenderDbSchema } from "./GetDbItem";
import CreateContinent from "./createContinent";

const UploadSingleTextFieldToDb = ({
  textTitle,
  asyncAction,
}: {
  textTitle: string;
  asyncAction: (arg: string) => Promise<any>;
}) => {
  const [inp, setInp] = useState("");

  return (
    <div>
      <p>Upload Single Text Field To Db</p>
      <form
        action={asyncAction}
        onSubmit={(e) => {
          e.preventDefault();
          asyncAction(inp);
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="textField">{textTitle}</label>
            <input
              type="text"
              className="px-2 py-1 bg-gray-300 rounded-md"
              name="textField"
              autoComplete="off"
              value={inp}
              onChange={(e) => {
                setInp(e.target.value);
              }}
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
const AddLocation = () => {
  interface stateProps {
    selectedMode: string;
  }
  const data = [
    {
      state: "create/city",
      component: (
        <UploadSingleTextFieldToDb
          textTitle={"Create City"}
          asyncAction={createCity}
        />
      ),
    },
    {
      state: "create/country",
      component: (
        <UploadSingleTextFieldToDb
          textTitle={"Create Country"}
          asyncAction={createCountry}
        />
      ),
    },
    {
      state: "create/continent",
      component: (
        <UploadSingleTextFieldToDb
          textTitle="Create Continent"
          asyncAction={createContinent}
        />
      ),
    },
    { state: "get/country", component: <RenderDbSchema cb={getCountry} /> },
    { state: "get/city", component: <RenderDbSchema cb={getCity} /> },
    { state: "get/continent", component: <RenderDbSchema cb={getContinent} /> },
  ];
  const [state, setState] = useState<stateProps>({
    selectedMode: "create/city",
  });

  const renderedComponent = data.find(
    (obj) => obj.state === state.selectedMode
  );

  const buttons = [
    {
      buttonText: "Add City",
      action: () => setState({ selectedMode: "create/city" }),
    },
    {
      buttonText: "Add Country",
      action: () => setState({ selectedMode: "create/country" }),
    },
    {
      buttonText: "Add Continent",
      action: () => setState({ selectedMode: "create/continent" }),
    },
  ];

  const buttons2 = [
    {
      buttonText: "Get City",
      action: () => setState({ selectedMode: "get/city" }),
    },
    {
      buttonText: "Get country",
      action: () => setState({ selectedMode: "get/country" }),
    },
    {
      buttonText: "Get Continent",
      action: () => setState({ selectedMode: "get/continent" }),
    },
  ];

  return (
    <div className="min-h-screen">
      <p>Add Location</p>
      <div className="grid grid-cols-4 py-4">
        {buttons.map((button) => {
          return (
            <Button key={button.buttonText} onClick={button.action}>
              {button.buttonText}
            </Button>
          );
        })}
      </div>
      <div className="grid grid-cols-4">
        {buttons2.map((button) => {
          return (
            <Button key={button.buttonText} onClick={button.action}>
              {button.buttonText}
            </Button>
          );
        })}
      </div>
      <div className="my-8">{renderedComponent?.component}</div>
    </div>
  );
};

export default AddLocation;
