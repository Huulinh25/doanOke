import * as controllers from '../controllers';
import express from 'express';

const router = express.Router();

router.get('/', controllers.getClasses);
router.get('/:classID', controllers.getClassById);

router.post('/', controllers.createNewClass);
router.put('/:classID', controllers.updateClass); 
router.delete('/:classID', controllers.deleteClass);

module.exports = router;
