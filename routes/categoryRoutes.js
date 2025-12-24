import express  from "express";
import { deletecategory, getcategory, insertcategory, showcategory, updatecategory } from "../controllers/categoryControllers.js";

const router = express.Router();

router.get("/", getcategory);
router.post("/",insertcategory);
router.get("/:id",showcategory);
router.put("/:id",updatecategory);
router.delete("/:id",deletecategory);

export default router;