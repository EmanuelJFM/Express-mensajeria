const express = require('express');
const EmailController = require('../controller/EmailController'); 

const router = express.Router();

router.use(EmailController);

module.exports = router;
