const router = require('express').Router()
const {
    getUsers,
    getSingleUser,
    createUsers,
    deleteUsers,
    updateUsers,
} = require('../../controllers/userControllers.js');


router.route('/:userId')
        .get(getSingleUser)
        .delete(deleteUsers)
        .put(updateUsers);

router.route('/')
      .get(getUsers)
      .post(createUsers)

module.exports = router;    
