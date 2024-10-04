import { Router } from 'express';
import Talent from '../models/talentModel';

const router = Router();

router.get('/talents', async (req, res) => {
  try {
    const talents = await Talent.find(); 
    res.status(200).json(talents);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});
export default router;
