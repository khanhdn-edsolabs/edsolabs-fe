export const getUser = () => {
  const userStr = localStorage.getItem("name");
  if (userStr) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
};

export const setUserLocal = (name) => {
  localStorage.setItem("name", JSON.stringify(name));
};

export const removeUserLocal = () => {
  localStorage.removeItem("user");
};
