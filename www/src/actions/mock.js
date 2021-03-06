import fetchMock from "fetch-mock";
import faker from "faker";
import _ from "lodash";
import dayjs from "dayjs";

const machine_list = [
  { name: "machine710", ip: "127.0.0.1" },
  { name: "machine720", ip: "127.0.0.2" },
  { name: "machine510", ip: "127.0.0.3" },
  { name: "machine310", ip: "127.0.0.4" },
];
const catalog = ["System", "Security", "Configuration"];
const level = ["info", "warning", "error"];

const getDateRange = (key) => {
  const today = dayjs();
  let startDate = today.clone();
  let endDate = today.clone();
  let count;
  switch (key) {
    case "1m":
      startDate = startDate.subtract(1, "month");
      count = 1500;
      break;
    case "7d":
      startDate = startDate.subtract(7, "day");
      count = 500;
      break;
    case "24h":
      startDate = startDate.subtract(1, "day");
      count = 100;
      break;
  }
  return { startDate, endDate, count };
};

fetchMock.get("/api/v1/logs", function(url) {
  return new Promise((resolve) => {
    const { startDate, endDate, count } = getDateRange("24h");

    let data = _.times(count, () => {
      const machine = faker.random.arrayElement(machine_list);
      return {
        key: faker.random.uuid(),
        name: machine.name,
        ip: machine.ip,
        catalog: faker.random.arrayElement(catalog),
        content: faker.hacker.phrase(),
        level: faker.random.arrayElement(level),
        time: faker.date.between(
          startDate.format("YYYY-MM-DD"),
          endDate.format("YYYY-MM-DD")
        ),
      };
    });
    _.delay(() => resolve({ data }), 100);
  });
});

fetchMock.post("/api/v1/login", function(url, opts) {
  return new Promise((resolve, reject) => {
    const { body = "{}" } = opts;
    const { account, password } = JSON.parse(body);

    if (account === "root" && password === "root") {
      _.delay(() => resolve({ message: "Login Success" }), 100);
    } else {
      reject({ message: "Incorrect username or password." });
    }
  });
});

fetchMock.get("/api/v1/logout", function() {
  return new Promise((resolve) => {
    _.delay(() => resolve({ message: "Logout Success" }), 100);
  });
});
