import moment from "moment";

function Age(date) {
  // return moment(date, "MM/DD/YYYY").fromNow();
  return `${moment().diff(date, 'years')}`;
}

export default Age;
