const router = require('express').Router();
const RegisterCollaction = require('../../Collaction/Register.collaction');

router.route('/').post(RegisterCollaction.createUserCollaction);

module.exports = router;
