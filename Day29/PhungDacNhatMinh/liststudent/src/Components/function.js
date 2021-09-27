import moment from "moment";
//firstName
export const firstName = (e) => {
  let name = e.split(" ");
  return name[0];
};
//lastName
export const lastName = (e) => {
  let name = e.split(" ");
  return name[1];
};
//gender
export const gender = (e) => {
  if (e === "M") {
    return "Male";
  } else if (e === "F") {
    return "Female";
  }
};
//findAge
export const findAge = (e) => {
  let age = moment(e.dob, "dd/mm/yyyy").fromNow().split(" ")[0];
  return age;
};

//removeItem
export const removeItem = (arr, e) => {
  const index = arr.indexOf(e);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return e;
};

export const group = (e) => {
  const arr = [];
  e.forEach((item) => {
    const index = arr.findIndex((_item) => {
      return _item.rank === item.rank;
    });
    if (index === -1) {
      arr.push(item);
      removeItem(e, item);
    }
  });
  return arr;
};
