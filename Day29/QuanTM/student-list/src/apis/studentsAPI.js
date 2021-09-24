import config from "./config";

export const fetchStudent = async () => {
  return config.get("/students");
};
