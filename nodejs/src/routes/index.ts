import * as express from "express";
import * as Auth from "../controllers/auth.controller";
import * as Logs from "../controllers/log.controller";
const router = express.Router();

router.post("/login", Auth.Login);
router.get("/logout", Auth.Logout);
router.get("/logs", Logs.GetLogs);

export default router;
