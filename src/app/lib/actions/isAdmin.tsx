import getCurrentUser from "./getCurrentUser";

const isAdmin = async (): Promise<boolean> => {
  const resp = await getCurrentUser();
  if (resp.error) {
    return false;
  }
  if (resp.data.id) {
    if (resp.data.Role.roleName === "admin") {
      return true;
    }
  }
  return false;
};

export default isAdmin;
