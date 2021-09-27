const api = "http://localhost:5000/students";

//hàm get all
const getAll = (callback) => {
  fetch(api)
    .then((res) => res.json())
    .then(callback)
    .catch((error) => console.log("Error:", error));
};

//hàm post
const postItem = (data, callback) => {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(api, options)
    .then((res) => res.json())
    .catch((error) => console.log("Error:", error));
};

//hàm update
const updateItem = (id, data) => {
  var options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`${api}${id}`, options)
    .then((res) => res.json())
    .catch((error) => console.log("Error:", error));
};

//hàm delete
const deleteItem = (id) => {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${api}${id}`, options)
    .then((res) => res.json())
    .catch((error) => console.log("Error:", error));
};

export { getAll, postItem, updateItem, deleteItem };
