import express from 'express';
import urlRouter from './url.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/urls', urlRouter);

export default router;
