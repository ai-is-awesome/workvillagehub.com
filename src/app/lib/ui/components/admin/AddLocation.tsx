"use client";

import { FormEvent, useState } from "react";
import { Button } from "../../Button";
import {
  createCity,
  createContinent,
  createCountry,
  createLocation,
} from "@/app/lib/actions/createLocation";
import {
  getCity,
  getContinent,
  getCountry,
  getLocation,
} from "@/app/lib/actions/getLocation";
import { RenderDbSchema } from "./GetDbItem";
import CreateContinent from "./createContinent";
import {
  get_admin_location_buttons_1,
  get_admin_location_buttons_2,
} from "@/app/lib/data/admin-data";
import { TextInputAdmin } from "../../TextInputAdmin";
import { objectValuesToInt, removeUndefinedKeys } from "@/app/lib/utils/utils";

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

const CreateLocation = ({
  action,
}: {
  action: (p1?: number, p2?: number, p3?: number) => Promise<any>;
}) => {
  const [data, setData] = useState({
    cityId: "",
    countryId: "",
    continentId: "",
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    const sanitized = removeUndefinedKeys(data);
    const newObj = objectValuesToInt(sanitized);
    action(newObj);
  };

  return (
    <>
      <div>
        <p className="text-lg">Create Location</p>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => submitHandler(e)}
        >
          <TextInputAdmin
            inputText="Enter city id"
            value={data.cityId}
            type="number"
            onChange={(e) => {
              setData({ ...data, cityId: e.target.value });
            }}
          />
          <TextInputAdmin
            inputText="Enter Country id"
            value={data.countryId}
            type="number"
            onChange={(e) => {
              setData({ ...data, countryId: e.target.value });
            }}
          />
          <TextInputAdmin
            inputText="Enter Continent id"
            value={data.continentId}
            type="number"
            onChange={(e) => {
              setData({ ...data, continentId: e.target.value });
            }}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
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

    {
      state: "create/location",
      component: <CreateLocation action={createLocation} />,
    },
    { state: "get/country", component: <RenderDbSchema cb={getCountry} /> },
    { state: "get/city", component: <RenderDbSchema cb={getCity} /> },
    { state: "get/continent", component: <RenderDbSchema cb={getContinent} /> },
    { state: "get/location", component: <RenderDbSchema cb={getLocation} /> },
  ];
  const [state, setState] = useState<stateProps>({
    selectedMode: "create/city",
  });

  const renderedComponent = data.find(
    (obj) => obj.state === state.selectedMode
  );

  const buttons = get_admin_location_buttons_1(setState);
  const buttons2 = get_admin_location_buttons_2(setState);

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
