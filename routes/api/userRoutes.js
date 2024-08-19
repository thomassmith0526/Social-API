const router = require('express').Router()
const {
    getUsers,
    getSingleUser,
    createUsers,
    deleteUsers,
    updateUsers,
} = require('../../controllers/userControllers.js');

router.route('/').get(getUsers).post(createUsers)

router
    .route('./:userId')
    .get(getSingleUser)
    .delete(deleteUsers)
    .put(updateUsers);
   
module.exports = router;    