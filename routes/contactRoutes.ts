import { Router } from 'express';
import { saveContact } from '../controllers/contactController';
import {asyncHandler} from '../middlewares/asyncHandler'
const router = Router();
router.post('/contact', asyncHandler(saveContact));
export default router;
