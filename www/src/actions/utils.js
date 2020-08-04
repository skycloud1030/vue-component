import dayjs from "dayjs";
export function timeFormat(val) {
  if (val) return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
}
