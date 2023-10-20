import * as controllers from '../controllers'
import express from 'express'

const router = express.Router()

router.get('/', controllers.getClasses )
router.post('/', controllers.createNewClass )
router.put('/', controllers.updateClass )
router.delete('/:classID', controllers.deleteClass);

module.exports = router;