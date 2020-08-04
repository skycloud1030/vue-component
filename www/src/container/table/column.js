import dayjs from "dayjs";

const cellRenderer = {
  time: ({ cellData }) => dayjs(cellData).format("MM-DD HH:mm:ss"),
};

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    align: "left",
    width: 100,
    customRender: cellRenderer.time,
    ellipsis: true,
  },
  {
    title: "Severity",
    dataIndex: "level",
    align: "left",
    width: 100,
    ellipsis: true,
  },
  {
    title: "Array",
    dataIndex: "name",
    align: "left",
    width: 100,
    ellipsis: true,
  },
  {
    title: "IP",
    dataIndex: "ip",
    width: 100,
    ellipsis: true,
  },
  {
    title: "Catalog",
    dataIndex: "catalog",
    align: "left",
    width: 100,
    ellipsis: true,
  },
  {
    title: "Content",
    dataIndex: "content",
    align: "left",
    width: 300,
    ellipsis: true,
  },
];

export { columns };
