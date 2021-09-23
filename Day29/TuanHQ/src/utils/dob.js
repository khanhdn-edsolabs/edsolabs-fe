import moment from 'moment';

export const countingAge = (dob) => {
  const d = moment(dob);
  const now = moment();
  return now.diff(d, 'years');
};
