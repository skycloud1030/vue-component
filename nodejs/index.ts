import * as express from "express";
import router from "./src/routes/index";
import middlewares from "./src/middlewares";
const app = express();
const port = 3000;

middlewares(app);
app.use("/api/v1", router);
app.listen(port, () => console.log(`Server is running at :${port}`));
