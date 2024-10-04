import { Request, Response } from 'express';
import Contact from '../models/contactModel';

export const saveContact = async (req: Request, res: Response) : Promise<Response>=> {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    return res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};
