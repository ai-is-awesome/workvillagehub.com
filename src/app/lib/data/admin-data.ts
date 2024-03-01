export const get_admin_location_buttons_1 = (setState: Function) => {
  return [
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
    {
      buttonText: "Add Location",
      action: () => setState({ selectedMode: "create/location" }),
    },
  ];
};

export const get_admin_location_buttons_2 = (setState: Function) => {
  return [
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
    {
      buttonText: "Get Location",
      action: () => setState({ selectedMode: "get/location" }),
    },
  ];
};
