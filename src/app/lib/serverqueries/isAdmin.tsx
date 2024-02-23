import getCurrentUser from "./getCurrentUser";

const isAdmin = async (): Promise<boolean> => {
  const resp = await getCurrentUser();
  if (resp.error) {
    return false;
  }
  if (resp.data.user) {
    if (resp.data.user.roleId === 1) {
      return true;
    }
  }
  return false;
};

export default isAdmin;
