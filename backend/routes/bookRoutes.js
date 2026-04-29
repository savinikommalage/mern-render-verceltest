import express from "express";
import {
  createBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
// TODO: Add DELETE route

export default router;
