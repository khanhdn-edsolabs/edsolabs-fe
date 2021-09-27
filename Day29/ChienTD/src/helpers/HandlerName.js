function FirstName(fullname) {
  let index = fullname.indexOf(" ");
  return fullname.slice(0,index);
}

function LastName(fullname) {
  let index = fullname.indexOf(" ");
  return fullname.slice(index);
}

export {FirstName, LastName};