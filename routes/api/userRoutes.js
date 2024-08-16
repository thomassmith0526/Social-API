const router = require('express').Router()
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userControllers.js');

router.route('/').get(getUser).post(createUser);

router
    .route('./:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);
   
module.exports = router;    