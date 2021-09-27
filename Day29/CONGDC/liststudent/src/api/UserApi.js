const api = "http://localhost:3001/users";
const getAllUser = (callback) => {
  fetch(api)
    .then((res) => res.json())
    .then(callback)
    .catch((error) => console.log("Error:", error));
};

export { getAllUser };