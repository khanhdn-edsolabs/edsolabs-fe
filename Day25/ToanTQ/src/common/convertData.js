export const splitStr = (str, x) => {
  if (str === null || str === undefined || str === ' ') {
    return null;
  } else {
    const result = str?.split(' ');
    return result[x];
  }
};

export const date = o => {
  if (splitStr(o, 0) === getThisDate(new Date())) {
    return 'Today';
  } else {
    return splitStr(o, 0);
  }
};

export const getThisDate = thisDate => {
  const newDate = thisDate;
  const [month, day, year] = [newDate.getMonth(), newDate.getDate(), newDate.getFullYear()];
  const Month = month + 1 < 10 ? `0${month + 1}` : month + 1;
  return `${year}-${Month}-${day}`;
};
