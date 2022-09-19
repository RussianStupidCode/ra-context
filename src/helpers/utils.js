import moment from "moment";

const dateFormat = (dateString) => {
  const date = moment(dateString, "YYYY-MM-DD hh:mm:ss");

  const dateDiff = moment.duration(moment().diff(date));

  if (dateDiff.asHours() < 1) {
    return "12 минут назад";
  }

  const days = Math.round(dateDiff.asDays(), 0);

  if (days >= 1) {
    return `${days} дней назад`;
  }

  return "5 часов назад";
};
export { dateFormat };
