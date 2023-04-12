const express = require('express')
const router  = express.Router();
const {postData,getData,updateData,deleteData,getDataOne} = require('../controller/userController')


// Routes Declaration

router.route('/postinventory').post(postData)
router.route('/getinventory').get(getData)
router.route('/getinventory/:_id').get(getDataOne)
router.route('/updateinventory/:_id').put(updateData)
router.route('/deleteinventory/:_id').delete(deleteData)

module.exports = router