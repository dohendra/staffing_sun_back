import { Router } from 'express';
import { saveContact } from '../controllers/contactController';
import {asyncHandler} from '../middlewares/asyncHandler'
const router = Router();
router.post('/', asyncHandler(saveContact));
export default router;
