import config from "./config";

export const auth = async (info) => {
  return config.post("/login", info);
};

export const tokenAuth = async (id, token) => {
  return config.get(`/600/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
