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
    (key) => result[key] === undefined && delete result[key]
  );
  return result;
}
