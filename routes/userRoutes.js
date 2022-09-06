const { createUser,getCreateUserPage } = require('../controller/userController');

const router = require('express').Router() ;

router.route('/create/user')
.post(createUser)
.get( getCreateUserPage) ;

module.exports = router