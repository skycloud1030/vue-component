import * as bodyParser from "body-parser";
import * as requestIp from "request-ip";
const json_setting = {
  extended: true,
  parameterLimit: 100000,
  limit: 1024 * 1024 * 1024 * 500,
};

export default function (app) {
  app.use(bodyParser.urlencoded(json_setting));
  app.use(bodyParser.json(json_setting));
  app.use(requestIp.mw());
}
