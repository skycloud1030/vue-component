import * as express from "express";
import * as Auth from "../controllers/auth.controller";
const router = express.Router();

router.post("/login", Auth.Login);

export default router;
