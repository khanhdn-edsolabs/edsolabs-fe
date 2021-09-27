const api = "http://localhost:5000/users";
const getAllStudent = (callback) => {
  fetch(api)
    .then((res) => res.json())
    .then(callback)
    .catch((error) => console.log("Error:", error));
};

export { getAllStudent };
