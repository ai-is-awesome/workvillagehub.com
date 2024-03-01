export async function getRequestBody(request: Request) {
  try {
    const body = await request.json();
    return body;
  } catch (e) {
    return null;
    // return Response.json({ error: "" }, { status: 400 });
  }
}

export const getDateString = (date: string): string => {
  const dateObject = new Date(date);
  // const options = { day: "numeric", month: "long", year: "2-digit" };
  const dateString = dateObject.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "2-digit",
  });
  return dateString;
};

export function removeUndefinedKeys(obj: Record<string, any>) {
  const result = { ...obj };
  Object.keys(result).forEach(
    (key) =>
      (result[key] === undefined ||
        result[key] === "" ||
        result[key] === null) &&
      delete result[key]
  );
  return result;
}

export function objectValuesToInt(obj) {
  const result = {};
  for (const key in obj) {
    const intValue = parseInt(obj[key], 10);
    if (!isNaN(intValue)) {
      result[key] = intValue;
    }
  }
  return result;
}

export function flattenObject(obj) {
  const result = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      for (const subKey in obj[key]) {
        result[`${key}_${subKey}`] = obj[key][subKey];
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
