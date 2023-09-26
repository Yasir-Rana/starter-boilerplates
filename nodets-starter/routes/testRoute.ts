import express from "express";
import {getData, setData} from "../controllers/testController";
const router = express.Router();

router.get("/test", getData);
router.post("/test", setData);

export default router;
