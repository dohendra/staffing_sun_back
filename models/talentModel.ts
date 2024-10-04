import mongoose from 'mongoose';

const talentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  techStack: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Talent = mongoose.model('Talent', talentSchema);

export default Talent;
