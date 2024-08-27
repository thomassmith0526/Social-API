const router = require('express').Router();
const{
    getThoughts,
    getSingleThought,
    createThoughts,
    deleteThoughts,
    updateThoughts,
} = require('../../controllers/thoughtControllers')

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:thoughtId')
    .get(getSingleThought)
    .delete(deleteThoughts)
    .put(updateThoughts);

module.exports = router;
