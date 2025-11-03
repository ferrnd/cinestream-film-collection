import { Router } from "express";
import * as streamController from "../controllers/streamController.js";

const router = Router();

router.get("/", streamController.listarTodos);
router.get("/:id", streamController.listarUm);
router.post("/", streamController.criar);
router.delete("/:id", streamController.deletar);
router.put("/:id", streamController.atualizar);

export default router;