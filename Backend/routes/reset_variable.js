import express from 'express';
const router = express.Router();


router.post('/reset-variable', (req, res) => {
    screenshotCount = 0;
    imageCount = 0; // Reset the variable
    console.log('Variable reset to 0');
    res.status(200).send({ message: 'Variable has been reset.' });
  });
  
  export default router;