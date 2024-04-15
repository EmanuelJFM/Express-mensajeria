const express = require('express');
const EmailService = require('../services/EmailService');
const router = express.Router();

const emailService = new EmailService();

router.post('/sendEmail', (req, res) => {
    const { to, subject, content } = req.body;
    emailService.sendEmail(to, subject, content);
    res.status(200).send('Correo enviado exitosamente');
});

module.exports = router;
