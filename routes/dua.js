import express from 'express';
import { categoryBn, categoryEn, duaBn, duaEn, subcategoriesBn, subcategoriesEn } from '../controllers/dua.js';
const router = express.Router();
//Fetching category..
router.route('/category/bn').get(categoryBn)
router.route('/category/en').get(categoryEn)
//Fetching subcategory...
router.route('/subcategory/:cat_id/bn').get(subcategoriesBn)
router.route('/subcategory/:cat_id/en').get(subcategoriesEn)
//Fetching duas....
router.route('/duas/:cat_id/bn').get(duaBn)
router.route('/duas/:cat_id/en').get(duaEn)

export default router;