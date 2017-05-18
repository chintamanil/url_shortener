import express from 'express';
import validate from 'express-validation';
import paramValidation from '../validations/param-validation';
import urlCtrl from '../controllers/url.controller';

const router = express.Router();

router.route('/')
    /** GET /api/urls - Get list of urls */
    .get(urlCtrl.list)

/** POST /api/urls - Create new url mapping */
.post(urlCtrl.create);

router.route('/:shortUrl')
    /** GET /api/urls/:shortUrl - Get url mapping */
    .get(validate(paramValidation.getUrl), urlCtrl.get)

/** PUT /api/urls/:shortUrl - Update url mapping */
.put(validate(paramValidation.updateUrl), urlCtrl.update)

/** DELETE /api/urls/:shortUrl - Delete url mapping */
.delete(urlCtrl.remove);

/** Load url mapping when API with shortUrl route parameter is hit */
router.param('shortUrl', urlCtrl.load);

export default router;
