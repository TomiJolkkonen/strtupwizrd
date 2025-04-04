import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { idea } = req.body;
  console.log("Received idea:", idea);
  res.json({ message: 'Idea saved!', idea });
});

export default router;
