export async function getRequestBody(request: Request) {
  try {
    const body = await request.json();
    return body;
  } catch (e) {
    return null;
    // return Response.json({ error: "" }, { status: 400 });
  }
}
