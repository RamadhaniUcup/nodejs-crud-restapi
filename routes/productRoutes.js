import express  from "express";
import { deleteproduct, getproduct, insertproduct, showproduct, updateproduct } from "../controllers/productControllers.js";
const router = express.Router();

router.get("/", getproduct);
router.post("/",insertproduct);
router.get("/:id",showproduct);
router.put("/:id",updateproduct);
router.delete("/:id",deleteproduct);

export default router;