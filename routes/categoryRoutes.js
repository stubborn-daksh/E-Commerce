import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router()

//routes - create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);
//routes - update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);
//routes - get all category
router.get('/get-category', categoryController);
//routes- get single category
router.get('/single-category/:slug', singleCategoryController);
//routes- delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);


export default router;