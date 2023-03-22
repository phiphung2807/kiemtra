
import express from "express";
import { create,remove,update,getAll,get } from "../controller/product";

const router = express.Router();

router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);
router.get("/products", getAll);
router.get("/products/:id", get);

export default router;